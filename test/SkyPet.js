var SkyPet = artifacts.require("./SkyPet.sol");
contract('SkyPet', (accounts)=> {
  var testSha=web3.sha3("SomePetId");
  it("should give the cost to add", function() {
    return SkyPet.deployed().then((instance)=>{
      return instance.costToAdd().then((cost)=>{
        assert.equal(cost, 100000000000000000, "Cost to add incorrect");
      });
    });
  });
  it("account has enough funds", function() {
    return SkyPet.deployed().then((instance)=>{
      return instance.costToAdd().then((cost)=>{
        assert(cost<web3.eth.getBalance(accounts[0]), "Not enough funds!");
      });
    });
  });
  it("should create a new item on ethereum", function() {
    return SkyPet.deployed().then((instance)=>{
      instance.costToAdd().then((cost)=>{
        return instance.addAttribute.sendTransaction(testSha, "helloworld", {value:cost, gas:3000000}).then((newIndex)=>{
          return instance.getAttribute(testSha, 0).then((result)=>{
            assert.equal(result[1], "helloworld", "account not added");
          });
        });
      });
    });
  });
  it("should get number of items", function() {
    return SkyPet.deployed().then((instance)=>{
      instance.costToAdd().then((cost)=>{
        return instance.addAttribute.sendTransaction(testSha, "helloworld", {value:cost, gas:3000000}).then((newIndex)=>{
          return instance.getNumberOfAttributes(testSha).then((result)=>{
            return assert.equal(result.c[0], 2, "attributes not working");
          });        
        });
      });
    });
  });
  it("should error because string too long", function() {
    return SkyPet.deployed().then((instance)=>{
        instance.costToAdd().then((cost)=>{
        return instance.addAttribute.sendTransaction(testSha, "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld", {value:cost, gas:3000000}).then((newIndex)=>{ 
          return new Error("Should not have worked");
        });
      }).catch((err)=>{
        return;
      });
    });
  });
});