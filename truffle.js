const spawn = require('child_process').spawn;
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    livetestnet: {
      host: "localhost",
      port: 8545,
      network_id: 3 // Match ropsten
    }
  },
  build: (options, callback)=>{
    const build=spawn("./build.sh");
    build.stderr.on('data', (data)=>{
      console.log(data.toString());
    });
    build.on('close', (code)=>{
      console.log("Finished building.  Update the skypetwrapper module in all SkyPet clients to use the new contract");
    });
  }
};
