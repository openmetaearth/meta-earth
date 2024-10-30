#!/usr/bin/env bash

mockgen_cmd="mockgen"

$mockgen_cmd -source=x/did/types/expected_keepers.go -package testutil -destination x/did/testutil/expected_keepers_mocks.go