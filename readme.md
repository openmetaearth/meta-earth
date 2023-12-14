# mechain
**mechain** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/me-chain@latest! | sudo bash
```
`username/me-chain` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).


### cw20-base
```
STORE_RES=$(me-chaind tx wasm store artifacts/cw20_base.wasm --from alice --gas=4000000 --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $STORE_RES  | jq  -r ."txhash")
CODE_ID=$(me-chaind q tx $TXHASH --output json | jq -r .logs[0].events[1].attributes[1].value)

OWNER=$(me-chaind keys show alice -a)
ADMIN=$(me-chaind keys show alice -a)
ALICE=$(me-chaind keys show alice -a)
BOB=$(me-chaind keys show bob -a)

INIT=$( jq -n --arg address $OWNER '{ "name": "SRSTOK", "symbol": "SRSTOK", "decimals": 6, "initial_balances": [ { "address": $address, "amount": "1000000" } ], "mint": { "minter": $address, "cap": "99900000000" } }' | tee /dev/tty )
me-chaind tx wasm instantiate $CODE_ID "$INIT" --from $OWNER --label "CW20" --admin=$ADMIN --gas=400000 --chain-id=mechain -y

CONTRACT=$(me-chaind query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[-1]')
me-chaind query wasm contract $CONTRACT

MINT=$( jq -n --arg recipient $BOB '{ "mint": { "recipient": $recipient, "amount": "1000000" } }' | tee /dev/tty )
me-chaind tx wasm execute $CONTRACT "$MINT" --from $OWNER --gas=400000 --chain-id=mechain -y

BALANCE_OF_OWNER=$( jq -n --arg address $OWNER '{ "balance": { "address": $address } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$BALANCE_OF_OWNER"

BALANCE_OF_ALICE=$( jq -n --arg address $ALICE '{ "balance": { "address": $address } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$BALANCE_OF_ALICE"

BALANCE_OF_BOB=$( jq -n --arg address $BOB '{ "balance": { "address": $address } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$BALANCE_OF_BOB"

TRANSFER_TO_BOB=$( jq -n --arg recipient $BOB '{ "transfer": { "recipient": $recipient, "amount": "10000" } }' | tee /dev/tty )
me-chaind tx wasm execute $CONTRACT "$TRANSFER_TO_BOB" --from $OWNER --gas=400000 --chain-id=mechain -y
```

### cw721-base
```
STORE_RES=$(me-chaind tx wasm store artifacts/cw721_base.wasm --from alice --gas 4000000 --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $STORE_RES  | jq  -r ."txhash")
CODE_ID=$(me-chaind q tx $TXHASH --output json | jq -r .logs[0].events[1].attributes[1].value)

OWNER=$(me-chaind keys show alice -a)
ADMIN=$(me-chaind keys show alice -a)
ALICE=$(me-chaind keys show alice -a)
BOB=$(me-chaind keys show bob -a)
CANDY=$(me-chaind keys show candy -a)
DODO=$(me-chaind keys show dodo -a)


INIT=$(jq -n --arg address $OWNER '{"minter":$address, "name":"alice", "symbol":"alice_nft"}' | tee /dev/tty)
me-chaind tx wasm instantiate $CODE_ID "$INIT" --from $OWNER --label "cw721-base" --admin=$ADMIN --gas=400000 --chain-id=mechain -y

CONTRACT=$(me-chaind query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[-1]')
me-chaind query wasm contract $CONTRACT

MINT=$(jq -n --arg address $OWNER '{"mint": {"owner": $address, "token_id":"1", "token_uri":"www.cosmwasm.com"}}') 
me-chaind tx wasm execute $CONTRACT "$MINT" --from $OWNER --gas=400000 --chain-id=mechain -y

me-chaind query wasm contract-state all $CONTRACT --output json | jq -r '.models[0].value' | base64 -d | jq .

TRANSFER_NFT=$(jq -n --arg address $BOB '{"transfer_nft":{"recipient":$address,"token_id":"1"}}')
me-chaind tx wasm execute $CONTRACT "$TRANSFER_NFT" --from $OWNER --gas=400000 --chain-id=mechain -y

OWNER_OF='{"owner_of": {"token_id":"1"}}'
me-chaind q wasm contract-state smart $CONTRACT $OWNER_OF

APPROVE_NFT=$(jq -n --arg address $CANDY '{"approve":{"spender":$address,"token_id":"1"}}')
me-chaind tx wasm execute $CONTRACT "$APPROVE_NFT" --from $BOB --gas=400000 --chain-id=mechain -y
```

### c_to_c
```
OWNER=$(me-chaind keys show alice -a)
ADMIN=$(me-chaind keys show alice -a)
BOB=$(me-chaind keys show bob -a)
CANDY=$(me-chaind keys show candy -a)

#store onto chain
STORE_RES=$(me-chaind tx wasm store artifacts/c_to_c.wasm --from alice --gas=4000000 --fees=2000umec --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $STORE_RES  | jq  -r ."txhash")
CODE_ID=$(me-chaind q tx $TXHASH --output json | jq -r .logs[0].events[1].attributes[1].value)

#instantiate
INIT=$( jq -n  '{}' | tee /dev/tty )
me-chaind tx wasm instantiate $CODE_ID "$INIT" --from $OWNER --label "C2C" --admin=$ADMIN --gas=400000 --fees=200umec --chain-id=mechain -y

#query contract
CONTRACT=$(me-chaind query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[-1]')
me-chaind query wasm contract $CONTRACT

#offer:  native coin -> native coin
OFFER_NATIVE=$( jq -n '{ "offer": {"price": {"amount": "10", "info": {"native": "umec"} } } }' | tee /dev/tty )
RES_OFFER=$(me-chaind tx wasm execute $CONTRACT "$OFFER_NATIVE" --amount=200umec --from bob --gas=400000 --fees=200umec --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $RES_OFFER  | jq  -r ."txhash")
OFFER_ID=$(me-chaind q tx $TXHASH --output json | jq -r .logs[0].events[5].attributes[1].value)

#query offer by id
OFFER_BY_ID=$( jq -n --arg offer_id $OFFER_ID '{"get_offer_by_id": { "id": 1 } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$OFFER_BY_ID"

#match: native coin -> native coin
MATCH=$( jq -n "{"match": { "id": 1 } }" | tee /dev/tty )
RES_MATCH=$(me-chaind tx wasm execute $CONTRACT "$MATCH" --from bob --amount 1000umec --gas=400000 --fees=200umec --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $RES_MATCH  | jq  -r ."txhash")
MATCH_ID=$(me-chaind q tx $TXHASH --output json | jq -r .logs[0].events[5].attributes[1].value)

#query match by id
MATCH_BY_ID=$( jq -n '{"get_match_by_id": { "id": 1 } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$MATCH_BY_ID"

#cancel offer by id
CANCEL_OFFER=$( jq -n "{"cancel_offer": { "id": 1 } }" | tee /dev/tty )
me-chaind tx wasm execute $CONTRACT "$CANCEL_OFFER" --from bob --amount 1000umec --gas=400000 --fees=200umec --chain-id=mechain -y --output json -b sync

#query offer history by id
OFFER_HISTORY_BY_ID=$( jq -n '{"get_offer_history_by_id": { "id": 1 } }' | tee /dev/tty )
me-chaind query wasm contract-state smart $CONTRACT "$OFFER_HISTORY_BY_ID"

```
## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
