#!/bin/sh

init(){
  # Common commands
genesis_config_cmds="$(dirname "$0")/src/genesis_config_commands.sh"
. "$genesis_config_cmds"

# Set parameters
DATA_DIRECTORY="$HOME/.mechain"
CONFIG_DIRECTORY="$DATA_DIRECTORY/config"
TENDERMINT_CONFIG_FILE="$CONFIG_DIRECTORY/config.toml"
CLIENT_CONFIG_FILE="$CONFIG_DIRECTORY/client.toml"
APP_CONFIG_FILE="$CONFIG_DIRECTORY/app.toml"
GENESIS_FILE="$CONFIG_DIRECTORY/genesis.json"
CHAIN_ID=${CHAIN_ID:-"mechain_100-1"}
MONIKER_NAME=${MONIKER_NAME:-"local"}
KEY_NAME=${KEY_NAME:-"hub-user"}
MNEMONIC="curtain hat remain song receive tower stereo hope frog cheap brown plate raccoon post reflect wool sail salmon game salon group glimpse adult shift"

# Setting non-default ports to avoid port conflicts when running local rollapp
SETTLEMENT_ADDR=${SETTLEMENT_ADDR:-"0.0.0.0:36657"}
P2P_ADDRESS=${P2P_ADDRESS:-"0.0.0.0:36656"}
GRPC_ADDRESS=${GRPC_ADDRESS:-"0.0.0.0:8090"}
GRPC_WEB_ADDRESS=${GRPC_WEB_ADDRESS:-"0.0.0.0:8091"}
API_ADDRESS=${API_ADDRESS:-"0.0.0.0:1318"}
JSONRPC_ADDRESS=${JSONRPC_ADDRESS:-"0.0.0.0:9545"}
JSONRPC_WS_ADDRESS=${JSONRPC_WS_ADDRESS:-"0.0.0.0:9546"}

TOKEN_AMOUNT=${TOKEN_AMOUNT:-"1000000000000000000000000umec"} #1M MEC (1e6mec = 1e6 * 1e18 = 1e24umec )
STAKING_AMOUNT=${STAKING_AMOUNT:-"10000000000000000umec"} #67% is staked (inflation goal)

# Validate mechain binary exists
export PATH=$PATH:$HOME/go/bin
if ! command -v med > /dev/null; then
  make install
  if ! command -v med; then
    echo "mechain binary not found in $PATH"
    exit 1
  fi
fi
# Verify that a genesis file doesn't exists for the mechain chain
if [ -f "$GENESIS_FILE" ]; then
  printf "\n======================================================================================================\n"
  echo "A genesis file already exists. building the chain will delete all previous chain data. continue? (y/n)"
  return 
fi
# Create and init mechain chain
med init "$MONIKER_NAME" --chain-id="$CHAIN_ID"

# ---------------------------------------------------------------------------- #
#                              Set configurations                              #
# ---------------------------------------------------------------------------- #
sed -i'' -e "/\[rpc\]/,+3 s/laddr *= .*/laddr = \"tcp:\/\/$SETTLEMENT_ADDR\"/" "$TENDERMINT_CONFIG_FILE"
sed -i'' -e "/\[p2p\]/,+3 s/laddr *= .*/laddr = \"tcp:\/\/$P2P_ADDRESS\"/" "$TENDERMINT_CONFIG_FILE"

sed -i'' -e "/\[grpc\]/,+6 s/address *= .*/address = \"$GRPC_ADDRESS\"/" "$APP_CONFIG_FILE"
sed -i'' -e "/\[grpc-web\]/,+7 s/address *= .*/address = \"$GRPC_WEB_ADDRESS\"/" "$APP_CONFIG_FILE"
sed -i'' -e "/\[json-rpc\]/,+6 s/address *= .*/address = \"$JSONRPC_ADDRESS\"/" "$APP_CONFIG_FILE"
sed -i'' -e "/\[json-rpc\]/,+9 s/^ws-address *= .*/ws-address = \"$JSONRPC_WS_ADDRESS\"/" "$APP_CONFIG_FILE"
sed -i'' -e '/\[api\]/,+3 s/enable *= .*/enable = true/' "$APP_CONFIG_FILE"
sed -i'' -e "/\[api\]/,+9 s/address *= .*/address = \"tcp:\/\/$API_ADDRESS\"/" "$APP_CONFIG_FILE"

sed -i'' -e 's/^minimum-gas-prices *= .*/minimum-gas-prices = "0.02umec"/' "$APP_CONFIG_FILE"

sed -i'' -e "s/^chain-id *= .*/chain-id = \"$CHAIN_ID\"/" "$CLIENT_CONFIG_FILE"
sed -i'' -e "s/^keyring-backend *= .*/keyring-backend = \"test\"/" "$CLIENT_CONFIG_FILE"
sed -i'' -e "s/^node *= .*/node = \"tcp:\/\/$SETTLEMENT_ADDR\"/" "$CLIENT_CONFIG_FILE"

set_consenus_params
set_gov_params
set_hub_params
set_misc_params
set_EVM_params
set_bank_denom_metadata
set_epochs_params
set_incentives_params
enable_monitoring
med keys add pools --keyring-backend test
med keys add user --keyring-backend test

  # Add genesis accounts and provide coins to the accounts
med add-genesis-account $(med keys show pools --keyring-backend test -a) 1000000000000000000000000umec
  # Give some uatom to the local-user as well
med add-genesis-account $(med keys show user --keyring-backend test -a) 1000000000000000000000umec


echo "$MNEMONIC" | med keys add "$KEY_NAME" --recover --keyring-backend test
med add-genesis-account "$(med keys show "$KEY_NAME" -a --keyring-backend test)" "$TOKEN_AMOUNT"
med add-genesis-stake-pool
med add-genesis-m-accounts

med gentx_DAO --pubkey "$(med keys show "$KEY_NAME" -p)"

validator_address=$(med keys show "$KEY_NAME" -a --keyring-backend test)
med gentx "$KEY_NAME" "$STAKING_AMOUNT" --chain-id "$CHAIN_ID" --keyring-backend test --region-id me_earth --validator-address "$validator_address"
med collect-gentxs
set_authorised_deployer_account "$(med keys show "$KEY_NAME" -a --keyring-backend test)"
med validate-genesis
}
if [ -n $1 ] ;then
  $1
else
  med start
fi