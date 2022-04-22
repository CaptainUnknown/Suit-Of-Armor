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


//Get the NFTs Owned by the User:
const options = { chain: 'eth', address: user.get('ethAddress') };
const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);