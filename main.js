//==================AUTHENTICATION====================
const serverUrl = "https://6vtxdhaw2qr6.usemoralis.com:2053/server";
const appId = "HQsrv5Vqi2ouBkZ5UhgWZyjSi3U7xiowRY6eN7TM";
Moralis.start({ serverUrl, appId });

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
                signingMessage: "Log in using Moralis",
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
//current eth address
let currentUser = Moralis.User.current();
var currentUserAddress = currentUser.attributes.ethAddress;
console.log(currentUserAddress);

document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-login").onclick = login;





//============REMOVE THIS IN FINAL VERSION======================
document.getElementById("notestnft").style.visibility = 'hidden';
document.getElementById("test1").style.visibility = 'hidden';
document.getElementById("test2").style.visibility = 'hidden';
document.getElementById("test3").style.visibility = 'hidden';
document.getElementById("test4").style.visibility = 'hidden';
//==============================================================

//==================INIT ELEMENTS===============================
document.getElementById("meta1").style.visibility = 'hidden';
document.getElementById("meta2").style.visibility = 'hidden';
document.getElementById("meta3").style.visibility = 'hidden';
document.getElementById("meta4").style.visibility = 'hidden';
document.getElementById("meta5").style.visibility = 'hidden';
document.getElementById("meta6").style.visibility = 'hidden';
document.getElementById("meta7").style.visibility = 'hidden';
document.getElementById("meta8").style.visibility = 'hidden';
document.getElementById("meta9").style.visibility = 'hidden';
document.getElementById("meta10").style.visibility = 'hidden';
document.getElementById("meta11").style.visibility = 'hidden';
document.getElementById("meta12").style.visibility = 'hidden';
document.getElementById("meta13").style.visibility = 'hidden';
document.getElementById("meta14").style.visibility = 'hidden';
document.getElementById("meta15").style.visibility = 'hidden';
document.getElementById("meta16").style.visibility = 'hidden';

document.getElementById("nonft1").style.visibility = 'hidden';
document.getElementById("nonft2").style.visibility = 'hidden';
document.getElementById("nonft3").style.visibility = 'hidden';
document.getElementById("nonft4").style.visibility = 'hidden';
document.getElementById("nonft5").style.visibility = 'hidden';
document.getElementById("nonft6").style.visibility = 'hidden';
document.getElementById("nonft7").style.visibility = 'hidden';
document.getElementById("nonft8").style.visibility = 'hidden';
document.getElementById("nonft9").style.visibility = 'hidden';
document.getElementById("nonft10").style.visibility = 'hidden';
document.getElementById("nonft11").style.visibility = 'hidden';
document.getElementById("nonft12").style.visibility = 'hidden';
document.getElementById("nonft13").style.visibility = 'hidden';
document.getElementById("nonft14").style.visibility = 'hidden';
document.getElementById("nonft15").style.visibility = 'hidden';
document.getElementById("nonft16").style.visibility = 'hidden';


//============================MORALIS API REQUEST=================================
const apiRequest1 = async() => {
    await fetch('https://deep-index.moralis.io/api/v2/nft/0xA958fd55Be008BE82595939646d37B5Ca4Fe778D/sync?chain=eth', {
            method: 'PUT',
            headers: {
                'accept': '*/*',
                'X-API-Key': 'qpwwZXW45C6gUhtMs9aL47F5vWiDq10w62XxkCfMPI0nN3bxaCIsIkXjPbxnJ72q'
            }
        }).then((response) => {
            console.log(response.status);
            return response.status;
        })
        .then((data) => {
            console.log(data);
        })
};
const apiRequest2 = async() => {
    await fetch('https://deep-index.moralis.io/api/v2/nft/0x703895bc5c3538a0eFAE736308f76d7bEDf01AfD/sync?chain=eth', {
            method: 'PUT',
            headers: {
                'accept': '*/*',
                'X-API-Key': 'qpwwZXW45C6gUhtMs9aL47F5vWiDq10w62XxkCfMPI0nN3bxaCIsIkXjPbxnJ72q'
            }
        }).then((response) => {
            console.log(response.status);
            return response.status;
        })
        .then((data) => {
            console.log(data);
        })
};
const apiRequest3 = async() => {
    await fetch('https://deep-index.moralis.io/api/v2/nft/0xea6cca8A0A7A9054e7695f6773476E5FAd43805b/sync?chain=eth', {
            method: 'PUT',
            headers: {
                'accept': '*/*',
                'X-API-Key': 'qpwwZXW45C6gUhtMs9aL47F5vWiDq10w62XxkCfMPI0nN3bxaCIsIkXjPbxnJ72q'
            }
        }).then((response) => {
            console.log(response.status);
            return response.status;
        })
        .then((data) => {
            console.log(data);
        })
};
const apiRequest4 = async() => {
    await fetch('https://deep-index.moralis.io/api/v2/nft/0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801/sync?chain=eth', {
            method: 'PUT',
            headers: {
                'accept': '*/*',
                'X-API-Key': 'qpwwZXW45C6gUhtMs9aL47F5vWiDq10w62XxkCfMPI0nN3bxaCIsIkXjPbxnJ72q'
            }
        }).then((response) => {
            console.log(response.status);
            return response.status;
        })
        .then((data) => {
            console.log(data);
        })
};

apiRequest1;
apiRequest2;
apiRequest3;
apiRequest4;




//======================================SOLVE NFTs====================================
var armorNFTsContractOne;
var armorNFTsContractTwo;
var armorNFTsContractThree;
var armorNFTsContractFour;

(async() => {
    const contractOne = { address: currentUserAddress, token_address: "0xA958fd55Be008BE82595939646d37B5Ca4Fe778D" }; //KERGOM OF OLREND MACE CONTRACT 
    armorNFTsContractOne = await Moralis.Web3API.account.getNFTsForContract(contractOne);
})();
(async() => {
    const contractTwo = { address: currentUserAddress, token_address: "0x703895bc5c3538a0eFAE736308f76d7bEDf01AfD" }; //GAELINS SONG KOPHER BOW CONTRACT 
    armorNFTsContractTwo = await Moralis.Web3API.account.getNFTsForContract(contractTwo);
})();
(async() => {
    const contractThree = { address: currentUserAddress, token_address: "0xea6cca8A0A7A9054e7695f6773476E5FAd43805b" }; //TORDON  OF TRIBEORN CONTRACT 
    armorNFTsContractThree = await Moralis.Web3API.account.getNFTsForContract(contractThree);
})();
(async() => {
    const contractFour = { address: currentUserAddress, token_address: "0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801" }; //WENOLIN OF SOMANE SWORD CONTRACT 
    armorNFTsContractFour = await Moralis.Web3API.account.getNFTsForContract(contractFour);
})();






//======================== VOID =================================
if (armorNFTsContractThree === 'undefined') {
    console.log(armorNFTsContractThree.result);
}

if (armorNFTsContractOne === 'undefined') {
    console.log(armorNFTsContractOne.result[0]);
}
if (armorNFTsContractTwo === 'undefined') {
    console.log(armorNFTsContractTwo.result);
}

if (armorNFTsContractFour === 'undefined') {
    console.log(armorNFTsContractFour.result);
}
//===============================================================





//===========================================GET RARITIES===========================================
//Gets & Stores the rarity of the all Owned NFTs
var rarityOwnedContractOne = [];
var rarityOwnedContractTwo = [];
var rarityOwnedContractThree = [];
var rarityOwnedContractFour = [];
//String Arrays rarities of all Contracts

//Grabing Values from returned objects & storing them in rarity arrays

if (armorNFTsContractThree !== 'undefined') {
    for (var i = 0; i < armorNFTsContractThree.result.length; i++) {
        var rarityOwnedContractThreeMetaData = JSON.parse(armorNFTsContractThree.result[i].metadata);
        rarityOwnedContractThree[i] = rarityOwnedContractThreeMetaData.attributes[0].value;
    }
} //put in 3rd


if (armorNFTsContractOne !== 'undefined') {
    for (var i = 0; i < armorNFTsContractOne.result.length; i++) {
        var rarityOwnedContractOneMetaData = JSON.parse(armorNFTsContractOne.result[i].metadata);
        rarityOwnedContractOne[i] = rarityOwnedContractOneMetaData.attributes[0].value; //change 0 to 2
    }
}
if (armorNFTsContractTwo !== 'undefined') {
    for (var i = 0; i < armorNFTsContractTwo.result.length; i++) {
        var rarityOwnedContractTwoMetaData = JSON.parse(armorNFTsContractTwo.result[i].metadata);
        rarityOwnedContractTwo[i] = rarityOwnedContractTwoMetaData.attributes[0].value;
    }
}
if (armorNFTsContractFour !== 'undefined') {
    for (var i = 0; i < armorNFTsContractFour.result.length; i++) {
        var rarityOwnedContractFourMetaData = JSON.parse(armorNFTsContractFour.result[i].metadata);
        rarityOwnedContractFour[i] = rarityOwnedContractFourMetaData.attributes[0].value;
    }
}





//========================================= REMOVE THIS IN FINAL VERSION =========================================================
var MysteryOne = false;
var MysteryTwo = false;
var MysteryThree = false;
var MysteryFour = false;
for (var i = 0; i < rarityOwnedContractOne.length; i++) {
    if (rarityOwnedContractOne[i] == "Mystery") {
        MysteryOne = true;
        // https://drive.google.com/drive/folders/1_Jvj9c-tFsXgDbYu9Ne-35buE1-VPb63?usp=sharing
    }
    if (rarityOwnedContractTwo[i] == "Mystery") {
        MysteryTwo = true;
        // https://drive.google.com/drive/folders/1_Jvj9c-tFsXgDbYu9Ne-35buE1-VPb63?usp=sharing
    }
    if (rarityOwnedContractThree[i] == "Mystery") {
        MysteryThree = true;
        // https://drive.google.com/drive/folders/1_Jvj9c-tFsXgDbYu9Ne-35buE1-VPb63?usp=sharing
    }
    if (rarityOwnedContractFour[i] == "Mystery") {
        MysteryFour = true;
        // https://drive.google.com/drive/folders/1_Jvj9c-tFsXgDbYu9Ne-35buE1-VPb63?usp=sharing
    }
}
console.log(rarityOwnedContractOne);
console.log(rarityOwnedContractOne.length);


if (MysteryOne == true) {
    document.getElementById("test1").style.visibility = 'visible';
}
if (MysteryTwo == true) {
    document.getElementById("test2").style.display = 'visible';
}
if (MysteryThree == true) {
    document.getElementById("test3").style.display = 'visible';
}
if (MysteryFour == true) {
    document.getElementById("test4").style.display = 'visible';
}
if (MysteryOne == false && MysteryTwo == false && MysteryThree == false && MysteryFour == false) {
    document.getElementById("notestnft").style.visibility = 'visible';
}
console.log(MysteryOne);
console.log(MysteryTwo);
console.log(MysteryThree);
console.log(MysteryFour);
//=================================================================================================================================




/*
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
        //https://drive.google.com/drive/folders/1vXOyL445IKlypbyi7l9GqtSZleZM2DGJ?usp=sharing
    }
    if (rarityOwnedContractOne[i] == "Rare") {
        rareOne = true;
        //https://drive.google.com/drive/folders/1YpCoqDZcT-rYfUM5boVafPaqUUaHXfWF?usp=sharing
    }
    if (rarityOwnedContractOne[i] == "Legendary") {
        legendaryOne = true;
        //https://drive.google.com/drive/folders/1UhC1H0VrYR_d3zdppXUnU1ZXM6YPDhVv?usp=sharing
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


console.log(standardOne);
console.log(legendaryFour)


if (standardOne == true) {
    document.getElementById("meta1").style.visibility = 'visible';
}
if (specialOne == true) {
    document.getElementById("meta2").style.display = "visible";
}
if (rareOne == true) {
    document.getElementById("meta3").style.display = "visible";
}
if (legendaryOne == true) {
    document.getElementById("meta4").style.display = "visible";
}


if (standardTwo == true) {
    document.getElementById("meta5").style.display = "visible";
}
if (specialTwo == true) {
    document.getElementById("meta6").style.display = "visible";
}
if (rareTwo == true) {
    document.getElementById("meta7").style.display = "visible";
}
if (legendaryTwo == true) {
    document.getElementById("meta8").style.display = "visible";
}


if (standardThree == true) {
    document.getElementById("meta9").style.display = "visible";
}
if (specialThree == true) {
    document.getElementById("meta10").style.display = "visible";
}
if (rareThree == true) {
    document.getElementById("meta11").style.display = "visible";
}
if (legendaryThree == true) {
    document.getElementById("meta12").style.display = "visible";
}


if (standardFour == true) {
    document.getElementById("meta13").style.display = "visible";
}
if (specialFour == true) {
    document.getElementById("meta14").style.display = "visible";
}
if (rareFour == true) {
    document.getElementById("meta15").style.display = "visible";
}
if (legendaryFour == true) {
    document.getElementById("meta16").style.display = "visible";
}


if (standardOne == false) {
    document.getElementById("nonft5").style.visibility = 'visible';

}

if (specialOne == false) {
    document.getElementById("nonft6").style.visibility = 'visible';

}

if (rareOne == false) {
    document.getElementById("nonft7").style.visibility = 'visible';

}

if (legendaryOne == false) {
    document.getElementById("nonft8").style.visibility = 'visible';

}



if (standardTwo == false) {
    document.getElementById("nonft9").style.visibility = 'visible';

}

if (specialTwo == false) {
    document.getElementById("nonft10").style.visibility = 'visible';

}

if (rareTwo == false) {
    document.getElementById("nonft11").style.visibility = 'visible';
}

if (legendaryTwo == false) {
    document.getElementById("nonft12").style.visibility = 'visible';
}



if (standardThree == false) {
    document.getElementById("nonft1").style.visibility = 'visible';
}

if (specialThree == false) {
    document.getElementById("nonft2").style.visibility = 'visible';
}

if (rareThree == false) {
    document.getElementById("nonft3").style.visibility = 'visible';
}

if (legendaryThree == false) {
    document.getElementById("nonft4").style.visibility = 'visible';
}


if (standardFour == false) {
    document.getElementById("nonft13").style.visibility = 'visible';
}

if (specialFour == false) {
    document.getElementById("nonft14").style.visibility = 'visible';
}

if (rareFour == false) {
    document.getElementById("nonft15").style.visibility = 'visible';
}

if (legendaryFour == false) {
    document.getElementById("nonft16").style.visibility = 'visible';
}
*/