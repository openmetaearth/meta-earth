# Meta Earth
**Meta Earth Network** is an independently developed public chain open source project that integrates open source technology framework like COSMOS SDK, Tendermint BFT, IBC etc. ME stands for Meta Earth. ME Network is the collective term for the entire Meta Earth's underlying architecture. ME Network redesigned an efficient and reliable consensus mechanism, adopting a fairer and more sustainable economic model, and added standardized decentralized financial services, making it well-suited for a global financial service ecosystem. [Ignite CLI](https://ignite.com/cli).
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
curl https://get.ignite.com/username/meta-earth@latest! | sudo bash
```
`username/meta-earth` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).


### cw20-base
```
STORE_RES=$(meta-earthd tx wasm store artifacts/cw20_base.wasm --from alice --gas=4000000 --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $STORE_RES  | jq  -r ."txhash")
CODE_ID=$(meta-earthd q tx $TXHASH --output json | jq -r .logs[0].events[1].attributes[1].value)

OWNER=$(meta-earthd keys show alice -a)
ADMIN=$(meta-earthd keys show alice -a)
ALICE=$(meta-earthd keys show alice -a)
BOB=$(meta-earthd keys show bob -a)

INIT=$( jq -n --arg address $OWNER '{ "name": "SRSTOK", "symbol": "SRSTOK", "decimals": 6, "initial_balances": [ { "address": $address, "amount": "1000000" } ], "mint": { "minter": $address, "cap": "99900000000" } }' | tee /dev/tty )
meta-earthd tx wasm instantiate $CODE_ID "$INIT" --from $OWNER --label "CW20" --admin=$ADMIN --gas=400000 --chain-id=mechain -y

CONTRACT=$(meta-earthd query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[-1]')
meta-earthd query wasm contract $CONTRACT

MINT=$( jq -n --arg recipient $BOB '{ "mint": { "recipient": $recipient, "amount": "1000000" } }' | tee /dev/tty )
meta-earthd tx wasm execute $CONTRACT "$MINT" --from $OWNER --gas=400000 --chain-id=mechain -y

BALANCE_OF_OWNER=$( jq -n --arg address $OWNER '{ "balance": { "address": $address } }' | tee /dev/tty )
meta-earthd query wasm contract-state smart $CONTRACT "$BALANCE_OF_OWNER"

BALANCE_OF_ALICE=$( jq -n --arg address $ALICE '{ "balance": { "address": $address } }' | tee /dev/tty )
meta-earthd query wasm contract-state smart $CONTRACT "$BALANCE_OF_ALICE"

BALANCE_OF_BOB=$( jq -n --arg address $BOB '{ "balance": { "address": $address } }' | tee /dev/tty )
meta-earthd query wasm contract-state smart $CONTRACT "$BALANCE_OF_BOB"

TRANSFER_TO_BOB=$( jq -n --arg recipient $BOB '{ "transfer": { "recipient": $recipient, "amount": "10000" } }' | tee /dev/tty )
meta-earthd tx wasm execute $CONTRACT "$TRANSFER_TO_BOB" --from $OWNER --gas=400000 --chain-id=mechain -y
```

### cw721-base
```
STORE_RES=$(meta-earthd tx wasm store artifacts/cw721_base.wasm --from alice --gas 4000000 --chain-id=mechain -y --output json -b sync)
TXHASH=$(echo $STORE_RES  | jq  -r ."txhash")
CODE_ID=$(meta-earthd q tx $TXHASH --output json | jq -r .logs[0].events[1].attributes[1].value)

OWNER=$(meta-earthd keys show alice -a)
ADMIN=$(meta-earthd keys show alice -a)
ALICE=$(meta-earthd keys show alice -a)
BOB=$(meta-earthd keys show bob -a)
CANDY=$(meta-earthd keys show candy -a)
DODO=$(meta-earthd keys show dodo -a)


INIT=$(jq -n --arg address $OWNER '{"minter":$address, "name":"alice", "symbol":"alice_nft"}' | tee /dev/tty)
meta-earthd tx wasm instantiate $CODE_ID "$INIT" --from $OWNER --label "cw721-base" --admin=$ADMIN --gas=400000 --chain-id=mechain -y

CONTRACT=$(meta-earthd query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[-1]')
meta-earthd query wasm contract $CONTRACT

MINT=$(jq -n --arg address $OWNER '{"mint": {"owner": $address, "token_id":"1", "token_uri":"www.cosmwasm.com"}}') 
meta-earthd tx wasm execute $CONTRACT "$MINT" --from $OWNER --gas=400000 --chain-id=mechain -y

meta-earthd query wasm contract-state all $CONTRACT --output json | jq -r '.models[0].value' | base64 -d | jq .

TRANSFER_NFT=$(jq -n --arg address $BOB '{"transfer_nft":{"recipient":$address,"token_id":"1"}}')
meta-earthd tx wasm execute $CONTRACT "$TRANSFER_NFT" --from $OWNER --gas=400000 --chain-id=mechain -y

OWNER_OF='{"owner_of": {"token_id":"1"}}'
meta-earthd q wasm contract-state smart $CONTRACT $OWNER_OF

APPROVE_NFT=$(jq -n --arg address $CANDY '{"approve":{"spender":$address,"token_id":"1"}}')
meta-earthd tx wasm execute $CONTRACT "$APPROVE_NFT" --from $BOB --gas=400000 --chain-id=mechain -y
```
## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
