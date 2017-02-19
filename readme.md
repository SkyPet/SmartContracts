# SkyPet Smart Contracts

This repository contains the smart contract code and the unit tests for the smart contract.

## Install Truffle
Install Truffle using `npm install -g truffle`

## Tests

Run tests using `truffle test`

## Compile Contracts

Compile using `truffle compile`

## Migrations (Deployment)
Run migrations (deploy) using `truffle migrations`.  

By default this uses the "development" or "ethereum-testrpc".  Install the testrpc using `npm install -g ethereum-testrpc` and run using `testrpc --port 8546` (note the 8546!).

To deploy to the testnet, store your password in a password.json file like

`{
    "testnet":"myTestNetPassword",
    "live":"myLivePassword"
}`

Note that the "live" network has not yet been added.  To migrate to the testnet, run `truffle migrate --network livetestnet`.

## Build (Add to skypetwrapper npm module)

Run `truffle build` to automatically clone the skypetwrapper module, add the SkyPet.json abi and deployment address, update the version, and publish the module.
