var Migrations = artifacts.require("./Migrations.sol");
var password=require('../password.json');
module.exports = function(deployer, network) {
  if(network==='livetestnet'){
    const accounts=web3.eth.accounts;//((err, result)=>{
    web3.personal.unlockAccount(accounts[0], password.testnet, 10000);
    
  }
  deployer.deploy(Migrations);
  
};
