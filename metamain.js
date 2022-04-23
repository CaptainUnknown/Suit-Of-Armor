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
//Returns an Object with an Array of Owned NFTs


//Gets & Stores the rarity of the all Owned NFTs
var rarityOwnedContractOne = [];
var rarityOwnedContractTwo = [];
var rarityOwnedContractThree = [];
var rarityOwnedContractFour = [];
//String Arrays rarities of all Contracts

//Grabing Values from returned objects & storing them in rarity arrays
for (var i = 0; i < armorNFTsContractOne.result.length; i++) {
    rarityOwnedContractOne[i] = armorNFTsContractOne.result[i].metadata.attributes[2].value;
}

for (var i = 0; i < armorNFTsContractTwo.result.length; i++) {
    rarityOwnedContractTwo[i] = armorNFTsContractOne.result[i].metadata.attributes[2].value;
}

for (var i = 0; i < armorNFTsContractThree.result.length; i++) {
    rarityOwnedContractThree[i] = armorNFTsContractOne.result[i].metadata.attributes[2].value;
}

for (var i = 0; i < armorNFTsContractFour.result.length; i++) {
    rarityOwnedContractFour[i] = armorNFTsContractOne.result[i].metadata.attributes[2].value;
}

var standardOne = false;
var specialOne = false;
var rareOne = false;
var legendaryOne = false;

var standardTwo = false;
var specialTwo = false;
var rareTwo = false;
var legendaryTwo = false;

var standardThree = false;
var specialThree = false;
var rareThree = false;
var legendaryThree = false;

var standardFour = false;
var specialFour = false;
var rareFour = false;
var legendaryFour = false;

//Giving the User Download Links for their respective rarities (CONFIRM FIRST)
for (var i = 0; i < rarityOwnedContractOne.length; i++) {
    if (rarityOwnedContractOne[i] == "Standard") {
        standardOne = true;
        // https://drive.google.com/drive/folders/1_Jvj9c-tFsXgDbYu9Ne-35buE1-VPb63?usp=sharing
    }
    if (rarityOwnedContractOne[i] == "Special") {
        specialOne = true;
        // https://drive.google.com/drive/folders/1vXOyL445IKlypbyi7l9GqtSZleZM2DGJ?usp=sharing
    }
    if (rarityOwnedContractOne[i] == "Rare") {
        rareOne = true;
        // https://drive.google.com/drive/folders/1YpCoqDZcT-rYfUM5boVafPaqUUaHXfWF?usp=sharing
    }
    if (rarityOwnedContractOne[i] == "Legendary") {
        legendaryOne = true;
        // https://drive.google.com/drive/folders/1UhC1H0VrYR_d3zdppXUnU1ZXM6YPDhVv?usp=sharing
    }
}

for (var i = 0; i < rarityOwnedContractTwo.length; i++) {
    if (rarityOwnedContractTwo[i] == "Standard") {
        standardTwo = true;
        // https://drive.google.com/drive/folders/1oMsQRJ57382IiBfbXE358fESWWJx-S0-?usp=sharing
    }
    if (rarityOwnedContractTwo[i] == "Special") {
        specialTwo = true;
        // https://drive.google.com/drive/folders/1FvKuGgcjUNEusGmjJUslmvDgq84l6wsx?usp=sharing
    }
    if (rarityOwnedContractTwo[i] == "Rare") {
        rareTwo = true;
        // https://drive.google.com/drive/folders/1_nz9fdclSuS5tQdOhYx4w1Qv7Jm4w8qM?usp=sharing
    }
    if (rarityOwnedContractTwo[i] == "Legendary") {
        legendaryTwo = true;
        // https://drive.google.com/drive/folders/1vVgsJjUO55Gs1AGGTrRVFa7gS3ZdN-Wv?usp=sharing
    }
}

for (var i = 0; i < rarityOwnedContractThree.length; i++) {
    if (rarityOwnedContractThree[i] == "Standard") {
        standardThree = true;
        // https://drive.google.com/drive/folders/1Sckw2PmHvRaFUOgxcaGmyllteBmBw1bB?usp=sharing
    }
    if (rarityOwnedContractThree[i] == "Special") {
        specialThree = true;
        // https://drive.google.com/drive/folders/1EFn2cpQOLZKS4sAelDIppu9NrlkUr5JB?usp=sharing
    }
    if (rarityOwnedContractThree[i] == "Rare") {
        rareThree = true;
        // https://drive.google.com/drive/folders/1iucwEJaESbSm7n9oQQnLLWj0_72O5Dkd?usp=sharing
    }
    if (rarityOwnedContractThree[i] == "Legendary") {
        legendaryThree = true;
        // https://drive.google.com/drive/folders/1jvQw-e5HO_VlcvpttSHlHQJMU5GtN7Ss?usp=sharing
    }
}

for (var i = 0; i < rarityOwnedContractFour.length; i++) {
    if (rarityOwnedContractFour[i] == "Standard") {
        standardFour = true;
        // https://drive.google.com/drive/folders/1gHDHFg_j-pfoZd0kwCUYFVXHjNcq1g5c?usp=sharing
    }
    if (rarityOwnedContractFour[i] == "Special") {
        specialFour = true;
        // https://drive.google.com/drive/folders/1tUI-H7W0E0JvkASyW5wmtAWrDC-0HGp5?usp=sharing
    }
    if (rarityOwnedContractFour[i] == "Rare") {
        rareFour = true;
        // https://drive.google.com/drive/folders/1lmnN-5eqY4LcG5ZVSX3fJ2bUZcT3m4a0?usp=sharing
    }
    if (rarityOwnedContractFour[i] == "Legendary") {
        legendaryFour = true;
        // https://drive.google.com/drive/folders/1h2pzBL7jvEJ6Nyx-UegiD3ON0YhaZZYr?usp=sharing
    }
}

$(true)(function() {
    var r = $('<input type="button" value="download button"/>');
    $("body").append("<button><a href='" + "https://example.com/" + "'>Download Source</a></button>");
});