function resyncLoop1() {
     for (var i = 1; i <= 500; i++) {
         async function resyncLoop11() {
             const options = {
                 address: "0xA958fd55Be008BE82595939646d37B5Ca4Fe778D",
                 token_id: i,
                 flag: "metadata",
             };
             const resyncResponse = await Moralis.Web3API.token.reSyncMetadata(options);
             console.log(resyncResponse)
         }
         setTimeout(function() {}, 250);
         resyncLoop11();
     }
 }
 resyncLoop1();

 function resyncLoop2() {
     for (var i = 1; i <= 500; i++) {
         async function resyncLoop22() {
             const options = {
                 address: "0x703895bc5c3538a0eFAE736308f76d7bEDf01AfD",
                 token_id: i,
                 flag: "metadata",
             };
             const resyncResponse = await Moralis.Web3API.token.reSyncMetadata(options);
             console.log(resyncResponse)
         }
         setTimeout(function() {}, 250);
         resyncLoop22();
     }
 }
 resyncLoop2();

 function resyncLoop3() {
     for (var i = 1; i <= 500; i++) {
         async function resyncLoop33() {
             const options = {
                 address: "0xea6cca8A0A7A9054e7695f6773476E5FAd43805b",
                 token_id: i,
                 flag: "metadata",
             };
             const resyncResponse = await Moralis.Web3API.token.reSyncMetadata(options);
             console.log(resyncResponse)
         }
         setTimeout(function() {}, 250);
         resyncLoop33();
     }
 }
 resyncLoop3();

 function resyncLoop4() {
     for (var i = 1; i <= 500; i++) {
         async function resyncLoop44() {
             const options = {
                 address: "0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801",
                 token_id: i,
                 flag: "metadata",
             };
             const resyncResponse = await Moralis.Web3API.token.reSyncMetadata(options);
             console.log(resyncResponse)
         }
         setTimeout(function() {}, 250);
         resyncLoop44();
     }
 }
 resyncLoop4();