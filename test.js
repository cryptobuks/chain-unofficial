var api = require("./index.js");


function test(err, resp){
  if(err){
    console.log(err);
  } else {
    console.log(JSON.stringify(resp));
  }
}

var testnetOpts = {network: "testnet", key: "20eca2a0a7edc8b93d46a7b9f3729e6c", secret: "cad9f57fc061ee0524f6824fea6a4c6d"};
var mainnetOpts = {network: "bitcoin", key: "20eca2a0a7edc8b93d46a7b9f3729e6c", secret: "cad9f57fc061ee0524f6824fea6a4c6d"};


//ADDRESSES

//api(mainnetOpts).Addresses.Summary({addresses: ["1HUTmSsFp9Rg4FYRftp85GGyZFEndZSoeq", "1PR3K4eYsVYtv9JXE3hjijLCtrWjTu9vwQ"]}, test)
//api(testnetOpts).Addresses.Summary({addresses: ["mjf6CRReqGSyvbgryjE3fbGjptRRfAL7cg"]}, test);

//api(mainnetOpts).Addresses.Transactions({addresses: ["1HUTmSsFp9Rg4FYRftp85GGyZFEndZSoeq", "1PR3K4eYsVYtv9JXE3hjijLCtrWjTu9vwQ"]}, test);
//api(testnetOpts).Addresses.Transactions({addresses: ["mjf6CRReqGSyvbgryjE3fbGjptRRfAL7cg"]}, test);

//api(mainnetOpts).Addresses.Unspents({addresses: ["1HUTmSsFp9Rg4FYRftp85GGyZFEndZSoeq", "1PR3K4eYsVYtv9JXE3hjijLCtrWjTu9vwQ"]}, test);
//api(testnetOpts).Addresses.Unspents({addresses: ["mjf6CRReqGSyvbgryjE3fbGjptRRfAL7cg"]}, test);

//BLOCKS

//api(mainnetOpts).Blocks.Get({blockids: ["00000000000000000216a936ebc1962e319a51bab8d3eae69335ac940284491d"]}, test)
//api(testnetOpts).Blocks.Get({blockids: ["00000000005df195c304bc89652377f3ef17ed8c71c636e88adecb0bbf20f873" , "fsdfs"]}, test)

//api(mainnetOpts).Blocks.Latest(test);
//api(testnetOpts).Blocks.Latest(test);

//api(mainnetOpts).Blocks.Propogate(test);
//api(testnetOpts).Blocks.Propogate(test);

//api(mainnetOpts).Blocks.Transactions({blockids: ["00000000000000000216a936ebc1962e319a51bab8d3eae69335ac940284491d"]}, test);
//api(testnetOpts).Blocks.Transactions({blockids: ["00000000005df195c304bc89652377f3ef17ed8c71c636e88adecb0bbf20f873"]}, test);


//Transactions

//api(mainnetOpts).Transactions.Get({txids: ["779b25c49817a7ab879c8a02678b2494ef60723dc93305240b4da37ba1927351"]}, test);
//api(testnetOpts).Transactions.Get({txids: ["940d527cb2f75c2fd3a5edaab29932891f1738d82934ba8f3d9bff4d22ea33f5"]}, test);



//api(mainnetOpts).Transactions.Outputs({"outputs" : [{txid: "9375818c85a6712416dac6edd403498180ee9ee0e604bd11ec35beaea384da51", vout: 0}]}, test);

 // api(testnetOpts).Transactions.Outputs({"outputs" : [{txid: "940d527cb2f75c2fd3a5edaab29932891f1738d82934ba8f3d9bff4d22ea33f5", vout: 0},
 //                                  {txid: "0409c167be7f367dbf5ba065b662c971dabfbc431a458af7dfb298f300026b86", vout: 1}]}, test);



