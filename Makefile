#!/usr/bin/make -f

BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
COMMIT := $(shell git log -1 --format='%H')

ifeq (,$(VERSION))
  VERSION := $(shell git describe --exact-match 2>/dev/null)
  # if VERSION is empty, then populate it with branch's name and raw commit hash
  ifeq (,$(VERSION))
    VERSION := $(BRANCH)-$(COMMIT)
  endif
endif

TM_VERSION := $(shell go list -m github.com/cometbft/cometbft | sed 's:.* ::') # grab everything after the space in "github.com/cometbft/cometbft v0.34.7"
SDK_BRANCH := $(shell cd ../cosmos-sdk-0.46.0 && git rev-parse --abbrev-ref HEAD)
SDK_COMMIT := $(shell cd ../cosmos-sdk-0.46.0 && git log -1 --format='%H')
SDK_VERSION := $(SDK_BRANCH)-$(SDK_COMMIT)

PACKAGES_NOSIMULATION=$(shell go list ./... | grep -v '/simulation')
PACKAGES_SIMTEST=$(shell go list ./... | grep '/simulation')
LEDGER_ENABLED ?= true
BINDIR ?= $(GOPATH)/bin
BUILDDIR ?= $(CURDIR)/build
MOCKS_DIR = $(CURDIR)/tests/mocks
HTTPS_GIT := https://github.com/cosmos/cosmos-sdk.git
DOCKER := $(shell which docker)
DOCKER_BUF := $(DOCKER) run --rm -v $(CURDIR):/workspace --workdir /workspace bufbuild/buf:1.0.0-rc8
PROJECT_NAME = $(shell git remote get-url origin | xargs basename -s .git)
DOCS_DOMAIN=docs.cosmos.network
# RocksDB is a native dependency, so we don't assume the library is installed.
# Instead, it must be explicitly enabled and we warn when it is not.
ENABLE_ROCKSDB ?= false

export GO111MODULE = on

# process build tags

build_tags = netgo
ifeq ($(LEDGER_ENABLED),true)
  ifeq ($(OS),Windows_NT)
    GCCEXE = $(shell where gcc.exe 2> NUL)
    ifeq ($(GCCEXE),)
      $(error gcc.exe not installed for ledger support, please install or set LEDGER_ENABLED=false)
    else
      build_tags += ledger
    endif
  else
    UNAME_S = $(shell uname -s)
    ifeq ($(UNAME_S),OpenBSD)
      $(warning OpenBSD detected, disabling ledger support (https://github.com/cosmos/cosmos-sdk/issues/1988))
    else
      GCC = $(shell command -v gcc 2> /dev/null)
      ifeq ($(GCC),)
        $(error gcc not installed for ledger support, please install or set LEDGER_ENABLED=false)
      else
        build_tags += ledger
      endif
    endif
  endif
endif

ifeq (secp,$(findstring secp,$(COSMOS_BUILD_OPTIONS)))
  build_tags += libsecp256k1_sdk
endif

whitespace :=
whitespace += $(whitespace)
comma := ,
build_tags_comma_sep := $(subst $(whitespace),$(comma),$(build_tags))

# process linker flags

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=me-chain \
		  -X github.com/cosmos/cosmos-sdk/version.AppName=me-chaind \
		  -X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
		  -X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
		  -X github.com/cosmos/cosmos-sdk/version.CosmosSdkVersion=$(SDK_VERSION) \
		  -X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags_comma_sep)" \
		  -X github.com/cometbft/cometbft/version.TMCoreSemVer=$(TM_VERSION)

ifeq ($(ENABLE_ROCKSDB),true)
  BUILD_TAGS += rocksdb_build
  test_tags += rocksdb_build
else
  $(warning RocksDB support is disabled; to build and test with RocksDB support, set ENABLE_ROCKSDB=true)
endif

# DB backend selection
ifeq (cleveldb,$(findstring cleveldb,$(COSMOS_BUILD_OPTIONS)))
  build_tags += gcc
endif
ifeq (badgerdb,$(findstring badgerdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += badgerdb
endif
# handle rocksdb
ifeq (rocksdb,$(findstring rocksdb,$(COSMOS_BUILD_OPTIONS)))
  ifneq ($(ENABLE_ROCKSDB),true)
    $(error Cannot use RocksDB backend unless ENABLE_ROCKSDB=true)
  endif
  CGO_ENABLED=1
  BUILD_TAGS += rocksdb
endif
# handle boltdb
ifeq (boltdb,$(findstring boltdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += boltdb
endif

ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  ldflags += -w -s
endif
ldflags += $(LDFLAGS)
ldflags := $(strip $(ldflags))

build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

BUILD_FLAGS := -tags "$(build_tags)" -ldflags '$(ldflags)'
# check for nostrip option
ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -trimpath
endif

# Check for debug option
ifeq (debug,$(findstring debug,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -gcflags "all=-N -l"
endif

all: tools build

# The below include contains the tools and runsim targets.
include contrib/devtools/Makefile

###############################################################################
###                                  Build                                  ###
###############################################################################

BUILD_TARGETS := build install

build: BUILD_ARGS=-o $(BUILDDIR)/
build-linux: BUILD_ARGS=-o $(BUILDDIR)/

build-linux: go.sum $(BUILDDIR)/
	@CC=x86_64-unknown-linux-gnu-gcc CGO_ENABLED=1 TARGET_CC=clang LEDGER_ENABLED=false GOOS=linux GOARCH=amd64 go build -mod=readonly $(BUILD_FLAGS) $(BUILD_ARGS) ./...

build: go.sum $(BUILDDIR)/
	go build -mod=readonly $(BUILD_FLAGS) $(BUILD_ARGS) ./...

install: go.sum
	go install -mod=readonly $(BUILD_FLAGS) $(BUILD_ARGS) ./...

docker-build:
	@DOCKER_BUILDKIT=1 docker build -t ghcr.io/me-hub/med:1.3.0 -f Dockerfile .

$(BUILDDIR)/:
	mkdir -p $(BUILDDIR)/

$(MOCKS_DIR):
	mkdir -p $(MOCKS_DIR)

distclean: clean tools-clean
clean:
	rm -rf \
    $(BUILDDIR)/ \
    tmp-swagger-gen/

.PHONY: build build-linux distclean clean

###############################################################################
###                                Protobuf                                 ###
###############################################################################

protoVer=0.13.0
protoImageName=ghcr.io/cosmos/proto-builder:$(protoVer)
protoImage=$(DOCKER) run  --env="GOPROXY=https://goproxy.cn" -v $(CURDIR):/workspace --workdir /workspace $(protoImageName)

proto-all: proto-format proto-lint proto-gen

proto-gen:
	@echo "Generating Protobuf files"
	@$(protoImage) sh ./scripts/protocgen.sh

proto-swagger-gen:
	@echo "Generating Protobuf Swagger"
	@$(protoImage) sh ./scripts/protoc-swagger-gen.sh
	$(MAKE) update-swagger-docs

proto-format:
	@$(protoImage) find ./ -name "*.proto" -exec clang-format -i {} \;

proto-lint:
	@$(protoImage) buf lint --error-format=json

proto-check-breaking:
	@$(protoImage) buf breaking --against $(HTTPS_GIT)#branch=main

TM_URL              = /home/node/web3/cometbft/proto/tendermint

TM_CRYPTO_TYPES     = proto/tendermint/crypto
TM_ABCI_TYPES       = proto/tendermint/abci
TM_TYPES            = proto/tendermint/types
TM_VERSION          = proto/tendermint/version
TM_LIBS             = proto/tendermint/libs/bits
TM_P2P              = proto/tendermint/p2p

proto-update-deps:
	@echo "Updating Protobuf dependencies"

	@mkdir -p $(TM_ABCI_TYPES)
	cp $(TM_URL)/abci/types.proto  $(TM_ABCI_TYPES)/types.proto

	@mkdir -p $(TM_VERSION)
	cp $(TM_URL)/version/types.proto  $(TM_VERSION)/types.proto

	@mkdir -p $(TM_TYPES)
	cp $(TM_URL)/types/types.proto  $(TM_TYPES)/types.proto
	cp $(TM_URL)/types/evidence.proto  $(TM_TYPES)/evidence.proto
	cp $(TM_URL)/types/params.proto  $(TM_TYPES)/params.proto
	cp $(TM_URL)/types/validator.proto  $(TM_TYPES)/validator.proto
	cp $(TM_URL)/types/block.proto  $(TM_TYPES)/block.proto

	@mkdir -p $(TM_CRYPTO_TYPES)
	cp $(TM_URL)/crypto/proof.proto  $(TM_CRYPTO_TYPES)/proof.proto
	cp $(TM_URL)/crypto/keys.proto  $(TM_CRYPTO_TYPES)/keys.proto

	@mkdir -p $(TM_LIBS)
	cp $(TM_URL)/libs/bits/types.proto  $(TM_LIBS)/types.proto

	@mkdir -p $(TM_P2P)
	cp $(TM_URL)/p2p/types.proto  $(TM_P2P)/types.proto

	$(DOCKER) run --rm -v $(CURDIR)/proto:/workspace --workdir /workspace $(protoImageName) buf mod update

.PHONY: proto-all proto-gen proto-swagger-gen proto-format proto-lint proto-check-breaking proto-update-deps


###############################################################################
###                          Tools & Dependencies                           ###
###############################################################################

go.sum: go.mod
	echo "Ensure dependencies have not been modified ..." >&2
	go mod verify
	go mod tidy
