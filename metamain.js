// Initialization
const serverUrl = "https://q4kxo8ml4b0b.usemoralis.com:2053/serverr"; //Change serverUrl
const appId = "ZyR5FjsvCuAGhvW4W6S4bCuWFdRV6XfhRZjWS9PZ"; //Change appId
Moralis.start({ serverUrl, appId });

// Authentication
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
                signingMessage: "Log In",
            })
            .then(function(user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;


//Get the NFTs of the SC Owned by the User:
const contractOne = { chain: "eth", address: user.get('ethAddress'), token_address: "0xA958fd55Be008BE82595939646d37B5Ca4Fe778D" }; //KERGOM OF OLREND MACE CONTRACT
const armorNFTsContractOne = await Moralis.Web3API.account.getNFTsForContract(contractOne);

const contractTwo = { chain: "eth", address: user.get('ethAddress'), token_address: "0x703895bc5c3538a0eFAE736308f76d7bEDf01AfD" }; //GAELINS SONG KOPHER BOW CONTRACT
const armorNFTsContractTwo = await Moralis.Web3API.account.getNFTsForContract(contractTwo);

const contractThree = { chain: "eth", address: user.get('ethAddress'), token_address: "0xea6cca8A0A7A9054e7695f6773476E5FAd43805b" }; //TORDON  OF TRIBEORN CONTRACT
const armorNFTsContractThree = await Moralis.Web3API.account.getNFTsForContract(contractThree);

const contractFour = { chain: "eth", address: user.get('ethAddress'), token_address: "0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801" }; //WENOLIN OF SOMANE SWORD CONTRACT
const armorNFTsContractFour = await Moralis.Web3API.account.getNFTsForContract(contractFour);