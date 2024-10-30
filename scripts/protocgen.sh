#!/usr/bin/env bash

set -x
set -eo pipefail

echo "Generating gogo proto code"
cd ./proto
buf mod update

proto_dirs=$(find ./mechain -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  proto_files=$(find "${dir}" -maxdepth 1 -name '*.proto')
  for file in $proto_files; do
    if grep "option go_package" "$file" &>/dev/null; then
      buf generate --template buf.gen.gogo.yaml "$file"
    fi
  done
done
cd ..

cp -r me-chain/* ./
rm -rf me-chain

go mod tidy

./scripts/protocgen-pulsar.sh