# Helheimr NFT template for Opensea
Created from Hardhat sample project.

# Why?
(OpenSea guide)[https://docs.opensea.io/docs/1-structuring-your-smart-contract] is a little bloated and verbosed, so I created this simple NFT contract in Hardhat for beginners to catchup. The metadata server is also included. Update the URIs in contract if you use your own metadata server.

# Setup

## Installation
Clone this project and run `yarn install` or `npm install`. 

## Configuring
Rename `.env.sample` to `.env` and full the required value.

Also rename `network.config.js.sample` to `network.config.js` and replace the placeholders. 

Headover to (https://infura.io)[https://infura.io/] to get project Id (use rinkeby testnet), and use metamask to copy your wallet private key. Make sure it has some ETH (to deploy and mint) ( you can get more at (https://faucet.rinkeby.io)[https://faucet.rinkeby.io/] )

IMPORTNANT: If you use any other testnet other than Rinkeby, make sure you replace OpenSea proxy registry in your `.env` file. Though I coudn't find any other registries except Rinkeby and mainnet.

## Testing
Make sure you run project locally atleast once to make sure everything is fine.
Run `yarn hardhat test` or `npx hardhat test` to test.

## Deployment
Make sure configured the project, deploy the project using `yarn hardhat run --network rinkeby scripts/deploy.js` or `npx hardhat run --network rinkeby scripts/deploy.js`. Once deployed you would get contract address, copy the address to .env file for the next step.

## Mint
Initially you won't have any tokens minted. Run `yarn hardhat run --network rinkeby scripts/mint.js` or `npx hardhat run --network rinkeby scripts/mint.js` to mint a single token. Edit the script to mint more.

## Viewing on OpenSea
Once the contract is deployed and you've mint some tokens, make sure the metadata server is running,then head over to the following URL to 
(https://testnets.opensea.io/assets/<YOUR_CONTRACT_ADDRESS>/<TOKEN_ID>)[https://testnets.opensea.io/assets/<YOUR_CONTRACT_ADDRESS>/<TOKEN_ID>] view your token. Use refresh button if there's any metadata issue.

Sample URL: (https://testnets.opensea.io/assets/0x71EcEaF1a6DC47E4f8555838f26735851a80c74f/1)[https://testnets.opensea.io/assets/0x71EcEaF1a6DC47E4f8555838f26735851a80c74f/1]

## Trading
Connect your metamask wallet with opensea to use the opensea trading features like auctions. 

## Have fun
Ofcourse everything happens on Testnet so there's no need to worry, play with it and have fun.