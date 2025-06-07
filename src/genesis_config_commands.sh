#! /bin/bash

tmp=$(mktemp)

set_gov_params() {
    echo "setting gov params"
    jq '.app_state.gov.deposit_params.min_deposit[0].denom = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.deposit_params.min_deposit[0].amount = "100000000"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.voting_params.voting_period = "300s"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.params.min_deposit[0].denom = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.params.min_deposit[0].amount = "100000000"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.params.burn_vote_veto = false' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.params.voting_period = "300s"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.gov.params.max_deposit_period = "300s"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

set_hub_params() {
    echo "setting hub params"
    sed -i'' -e 's/bond_denom": ".*"/bond_denom": "umec"/' "$GENESIS_FILE"
    sed -i'' -e 's/mint_denom": ".*"/mint_denom": "umec"/' "$GENESIS_FILE"

    jq '.app_state.rollapp.params.dispute_period_in_blocks = "50"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.delayedack.params.bridging_fee = "0"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.delayedack.params.epoch_identifier = "week"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.delayedack.params.delete_packets_epoch_limit = "1000000"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.eibc.params.epoch_identifier = "week"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"

    #increase the tx size cost per byte from 10 to 100
    jq '.app_state.auth.params.tx_size_cost_per_byte = "100"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"


    # jail validators faster, and shorten recovery time, no slash for downtime
    jq '.app_state.slashing.params.signed_blocks_window = "10000"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.slashing.params.min_signed_per_window = "0.800000000000000000"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.slashing.params.downtime_jail_duration = "120s"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state.slashing.params.slash_fraction_downtime = "0.0"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

set_consenus_params() {
    # cometbft's updated values
	# 	MaxBytes: 4194304,  // four megabytes
	# 	MaxGas:   10000000, // ten million
    echo "setting consensus params"
    jq '.consensus_params["block"]["max_bytes"] = "4194304"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.consensus_params["block"]["max_gas"] = "-1"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

set_EVM_params() {
  echo "setting EVM params"
  jq '.app_state["feemarket"]["params"]["no_base_fee"] = false' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
  jq '.app_state.evm.params.evm_denom = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
  jq '.app_state.evm.params.enable_create = true' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

#Adding a "minute" epoch
set_epochs_params() {
    echo "setting epochs params"
    jq '.app_state.epochs.epochs += [{
    "identifier": "minute",
    "start_time": "0001-01-01T00:00:00Z",
    "duration": "60s",
    "current_epoch": "0",
    "current_epoch_start_time": "0001-01-01T00:00:00Z",
    "epoch_counting_started": false,
    "current_epoch_start_height": "0"
    }]' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

#should be set to days on live net and lockable duration to 2 weeks
set_incentives_params() {
  echo "setting incentives params"
  jq '.app_state.incentives.params.distr_epoch_identifier = "minute"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
  jq '.app_state.incentives.lockable_durations = ["60s"]' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}


set_misc_params() {
    echo "setting misc params"
    jq '.app_state.crisis.constant_fee.denom = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq -r '.app_state.gamm.params.pool_creation_fee[0].denom = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state["txfees"]["basedenom"] = "umec"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    jq '.app_state["txfees"]["params"]["epoch_identifier"] = "minute"' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
    
    jq -r '.app_state.gamm.params.enable_global_pool_fees = true' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

set_bank_denom_metadata() {
    echo "setting bank denom params"
    jq '.app_state.bank.denom_metadata = [
        {
            "base": "umec",
            "denom_units": [
                {
                    "aliases": [],
                    "denom": "umec",
                    "exponent": 0
                },
                {
                    "aliases": [],
                    "denom": "MEC",
                    "exponent": 8
                }
            ],
            "description": "Denom metadata for MEC (umec)",
            "display": "MEC",
            "name": "MEC",
            "symbol": "MEC"
        }
    ]' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

set_authorised_deployer_account() {
  jq --arg address $1 '.app_state.rollapp.params.deployer_whitelist += [{ "address": $address }]' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}

enable_monitoring() {
    sed -i'' -e "/\[telemetry\]/,+8 s/enabled = .*/enabled = true/" "$APP_CONFIG_FILE"
    sed  -i'' -e "s/^prometheus-retention-time =.*/prometheus-retention-time = 31104000/" "$APP_CONFIG_FILE"
    sed  -i'' -e "s/^prometheus =.*/prometheus = true/" "$TENDERMINT_CONFIG_FILE"
    sed -ie 's/enabled-unsafe-cors.*$/enabled-unsafe-cors = true/' "$APP_CONFIG_FILE"
    sed -ie 's/enable-unsafe-cors.*$/enabled-unsafe-cors = true/' "$APP_CONFIG_FILE"
    sed -ie 's/cors_allowed_origins.*$/cors_allowed_origins = ["*"]/' "$TENDERMINT_CONFIG_FILE"
}

set_kyc_issuers() {
    echo "setting issuer"
    jq '.app_state.kyc.issuers = [
      {
        "did": "0000000000001",
        "address": "me139mq752delxv78jvtmwxhasyrycufsvr0mue6u",
        "pubkey": "{\"@type\":\"/ethermint.crypto.v1.ethsecp256k1.PubKey\",\"key\":\"Aggm+J77xeXPyJMOnpdtEu+nmCG/ia9zudrm3kGs722z\"}",
        "kycLevel": "KYC_LEVEL_TWO",
        "status": "DID_STATUS_ACTIVE"
      },
      {
        "did": "0000000000002",
        "address": "me1p7s6k4ecrm2kl0rs6399k99pyuk322dc78dcxq",
        "pubkey": "{\"@type\":\"/ethermint.crypto.v1.ethsecp256k1.PubKey\",\"key\":\"AqHK4uOBtHkCqB6LtZab+ggeuaqch0rJLbMuBswZm2El\"}",
        "kycLevel": "KYC_LEVEL_TWO",
        "status": "DID_STATUS_ACTIVE"
      }
    ]' "$GENESIS_FILE" > "$tmp" && mv "$tmp" "$GENESIS_FILE"
}