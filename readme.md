# ME Hub 
![license](https://img.shields.io/github/license/st-chain/me-hub)
![Go](https://img.shields.io/badge/go-1.23-blue.svg)
![issues](https://img.shields.io/github/issues/st-chain/me-hub)

## Overview

Welcome to the ME Hub, the **Settlement Layer of the ME protocol**.

This guide will walk you through the steps required to set up and run a ME Hub full node.

## Table of Contents

- [ME Hub](#ME-hub)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Initializing `med`](#initializing-med)
  - [Running the Chain](#running-the-chain)
  - [Bootstrapping liquidity pools](#bootstrapping-liquidity-pools)
  - [Adding incentives](#adding-incentives)
    - [Creating incentives streams](#creating-incentives-streams)
    - [Locking tokens](#locking-tokens)
    - [check rewards](#check-rewards)
  - [Debugging Container](#debugging-container)
  - [Developer](#developer)
    - [Setup push hooks](#setup-push-hooks)

## Prerequisites

- [Go (v1.23 or above)](https://go.dev/doc/install)

## Installation

Clone `me-hub`:

```sh
git clone https://github.com/st-chain/me-hub.git
cd me-hub
make install
```

Check that the med binaries have been successfully installed:

```sh
med version
```

If the med command is not found an error message is returned,
confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

## Initializing `med`

- Using the setup script:

  This method is preferred as it preconfigured to support [running rollapps locally](https://github.com/st-chain/rollapp)

  ```sh
  bash scripts/setup_local.sh
  ```

- Manually:

  First, set the following environment variables:

  ```sh
  export CHAIN_ID="mechain_100-1"
  export KEY_NAME="hub-user"
  export MONIKER_NAME="local"
  ```

  Second, create genesis and init ME chain:

  ```sh
  med init "$MONIKER_NAME" --chain-id "$CHAIN_ID"
  ```

  Third, set parameters to ensure denom is umec:

  ```sh
  bash scripts/set_params.sh
  ```

  Then, add genesis account and provide token to the account:

  ```sh
  med keys add "$KEY_NAME" --keyring-backend test
  med add-genesis-account "$(med keys show "$KEY_NAME" -a --keyring-backend test)" 1000umec
  med gentx "$KEY_NAME" 670mec --chain-id "$CHAIN_ID" --keyring-backend test
  med collect-gentxs
  ```

## Running the Chain

Now start the chain!

```sh
med start
```

You should have a running local node!

## Bootstrapping liquidity pools

To bootstrap the `GAMM` module with pools:

```sh
sh scripts/pools/pools_bootstrap.sh
```

## Adding incentives

### Creating incentives streams

After creating the pools above, we create 2 incentive streams through gov:

```sh
sh scripts/incentives/fund_incentives.sh
```

Wait for the gov proposal to pass, and validate with:

```sh
med q streamer streams
```

### Locking tokens

To get incentives, we need to lock the LP tokens:

```sh
sh scripts/incentives/lockup_bootstrap.sh
```

validate with:

```sh
med q lockup module-balance
```

### check rewards

Every minute a share of the rewards will be distributed!

validate with:

```sh
med q incentives active-gauges

# alternatively, watch the outpup - you will see the "amount" change every minute
#  watch -n1 -d "med q incentives active-gauges --output json | jq '.data[] | { "id": .id, "coins": .coins } '"
```

## Debugging Container

Pre-requisite:
 Install [Docker](https://docs.docker.com/get-docker/)
 Install [VSCode](https://code.visualstudio.com/)
 Install [VSCode Go extension](https://marketplace.visualstudio.com/items?itemName=golang.go)
 Install [Delve](https://github.com/go-delve/delve)

To debug, you can use the following command to run the debug container:

```sh
make docker-run-debug
```

Then you can run the debugger with the following config for `launch.json` in VSCode:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "ME Debug Container",
            "type": "go",
            "request": "attach",
            "mode": "remote",
            "port": 4000,
            "host": "127.0.0.1",
            "debugAdapter": "legacy" // To be remove in the future after https://github.com/golang/vscode-go/issues/3096 is fixed
        }
    ]
}
```

After that, you can run the debugger and set breakpoints in the code.

Example: 

Add breakpoint to `ctx` in `x/eibc/keeper/grpc_query.go` :

```go
func (q Querier) Params(goCtx context.Context, req *types.QueryParamsRequest) (*types.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	return &types.QueryParamsResponse{Params: q.GetParams(ctx)}, nil
}
```

Open your browser and go to `http://localhost:1318/st-chain/me-hub/eibc/params` and you will see debugger stop and print the value at the breakpoint.

## Developer

For support, join our [Discord](http://discord.gg/ME) community and find us in the Developer section.

### Setup push hooks

To setup push hooks, run the following command:

```sh
./scripts/setup_push_hooks.sh
```
