var ConvertLib = artifacts.require("./ConvertLib.sol");
var SkyPet = artifacts.require("./SkyPet.sol");
var password=require('../password.json');
module.exports = function(deployer, network) {
  if(network==='livetestnet'){
    const accounts=web3.eth.accounts;//((err, result)=>{
    web3.personal.unlockAccount(accounts[0], password.testnet, 10000);/*, (err, arg)=>{
      console.log(err);
      deployer.deploy(ConvertLib);
      deployer.link(ConvertLib, SkyPet);
      deployer.deploy(SkyPet);
    });*/
    //});

  }
  //else{
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, SkyPet);
    deployer.deploy(SkyPet);
  //}
};

