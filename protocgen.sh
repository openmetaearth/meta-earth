#!/usr/bin/env bash

set -eo pipefail

buf format -w

# get protoc executions
# go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null

echo "Generating gogo proto code"
proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      if grep go_package $file &>/dev/null; then
        buf generate --template proto/buf.gen.gogo.yaml $file
      fi
    done
done

# Generate TypeScript client code
# echo "Generating TypeScript client code"
# buf generate --template buf.gen.ts.yaml

# move proto files to the right places
# Note: Proto files are suffixed with the current binary version.
cp -r github.com/st-chain/me-hub/* ./
rm -rf github.com