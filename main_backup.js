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
    setTimeout(function() {
        alert("Wallet Conected");
    }, 400);
    getNFTObjs();
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}
//current eth address
let currentUser = Moralis.User.current();
var currentUserAddress = 0;

async function getCurrentUser() {
    currentUserAddress = currentUser.attributes.ethAddress;
    console.log(currentUserAddress);
}

document.getElementById("btn-logout").addEventListener('click', () => {
    logOut();
    setTimeout(function() {
        alert("Wallet Disconnected");
    }, 800);
}, false);
document.getElementById("btn-login").addEventListener('click', () => {
    login();
    getNFTObjs();
}, false);


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

document.getElementById("item1").style.visibility = 'hidden';
document.getElementById("item2").style.visibility = 'hidden';
document.getElementById("item3").style.visibility = 'hidden';
document.getElementById("item4").style.visibility = 'hidden';
document.getElementById("item5").style.visibility = 'hidden';
document.getElementById("item6").style.visibility = 'hidden';
document.getElementById("item7").style.visibility = 'hidden';
document.getElementById("item8").style.visibility = 'hidden';
document.getElementById("item9").style.visibility = 'hidden';
document.getElementById("item10").style.visibility = 'hidden';
document.getElementById("item11").style.visibility = 'hidden';
document.getElementById("item12").style.visibility = 'hidden';
document.getElementById("item13").style.visibility = 'hidden';
document.getElementById("item14").style.visibility = 'hidden';
document.getElementById("item15").style.visibility = 'hidden';
document.getElementById("item16").style.visibility = 'hidden';

document.getElementById("nonfts").style.visibility = 'hidden';


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
var armorNFTsContractOneVar = {};
var armorNFTsContractTwoVar = {};
var armorNFTsContractThreeVar = {};
var armorNFTsContractFourVar = {};

async function getNFTObjs() {
    const contractOne = { address: currentUserAddress, token_address: "0xA958fd55Be008BE82595939646d37B5Ca4Fe778D" }; //KERGOM OF OLREND MACE CONTRACT 
    const armorNFTsContractOne = await Moralis.Web3API.account.getNFTsForContract(contractOne);
    //console.log(armorNFTsContractOne);
    armorNFTsContractOneVar = Object.assign({}, armorNFTsContractOne);
    console.log(armorNFTsContractOneVar);

    const contractTwo = { address: currentUserAddress, token_address: "0x703895bc5c3538a0eFAE736308f76d7bEDf01AfD" }; //GAELINS SONG KOPHER BOW CONTRACT 
    const armorNFTsContractTwo = await Moralis.Web3API.account.getNFTsForContract(contractTwo);
    //console.log(armorNFTsContractTwo);
    armorNFTsContractTwoVar = Object.assign({}, armorNFTsContractTwo);
    console.log(armorNFTsContractTwoVar);

    const contractThree = { address: currentUserAddress, token_address: "0xea6cca8A0A7A9054e7695f6773476E5FAd43805b" }; //TORDON  OF TRIBEORN CONTRACT 
    const armorNFTsContractThree = await Moralis.Web3API.account.getNFTsForContract(contractThree);
    //console.log(armorNFTsContractThree);
    armorNFTsContractThreeVar = Object.assign({}, armorNFTsContractThree);
    console.log(armorNFTsContractThreeVar);

    const contractFour = { address: currentUserAddress, token_address: "0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801" }; //WENOLIN OF SOMANE SWORD CONTRACT 
    const armorNFTsContractFour = await Moralis.Web3API.account.getNFTsForContract(contractFour);
    //console.log(armorNFTsContractFour);
    armorNFTsContractFourVar = Object.assign({}, armorNFTsContractFour);
    console.log(armorNFTsContractFourVar);

    console.log(armorNFTsContractOneVar);
    console.log(armorNFTsContractTwoVar);
    console.log(armorNFTsContractThreeVar);
    console.log(armorNFTsContractFourVar);



    //===========================================GET RARITIES===========================================
    //Gets & Stores the rarity of the all Owned NFTs
    var rarityOwnedContractOne = [];
    var rarityOwnedContractTwo = [];
    var rarityOwnedContractThree = [];
    var rarityOwnedContractFour = [];
    //String Arrays rarities of all Contracts

    //Grabing Values from returned objects & storing them in rarity arrays


    if (armorNFTsContractOneVar.result.length != 0) {
        for (var i = 0; i < armorNFTsContractOneVar.result.length; i++) {
            //var rarityOwnedContractOneMetaData = JSON.parse(armorNFTsContractOneVar.result[i].metadata);
            var oneTempMeta = JSON.parse(armorNFTsContractOneVar.result[i].metadata);
            rarityOwnedContractOne[i] = oneTempMeta.attributes[2].value; //change 0 to 2
        }
    }
    if (armorNFTsContractTwoVar.result.length != 0) {
        for (var i = 0; i < armorNFTsContractTwoVar.result.length; i++) {
            //var rarityOwnedContractTwoMetaData = JSON.parse(armorNFTsContractTwoVar.result[i].metadata);
            var twoTempMeta = JSON.parse(armorNFTsContractTwoVar.result[i].metadata);
            rarityOwnedContractTwo[i] = twoTempMeta.attributes[2].value;
        }
    }
    if (armorNFTsContractThreeVar.result.length != 0) {
        for (var i = 0; i < armorNFTsContractThreeVar.result.length; i++) {
            var threeTempMeta = JSON.parse(armorNFTsContractThreeVar.result[i].metadata);
            rarityOwnedContractThree[i] = threeTempMeta.attributes[2].value;
            console.log(rarityOwnedContractThree[i]);
        }
    }
    if (armorNFTsContractFourVar.result.length != 0) {
        for (var i = 0; i < armorNFTsContractFourVar.result.length; i++) {
            //var rarityOwnedContractFourMetaData = JSON.parse(armorNFTsContractFourVar.result[i].metadata);
            var fourTempMeta = JSON.parse(armorNFTsContractFourVar.result[i].metadata);
            rarityOwnedContractFour[i] = fourTempMeta.attributes[2].value;
        }
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


    //Giving the User Download Links for their respective rarities
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



    if (standardOne) {
        document.getElementById("meta1").style.visibility = 'visible';
    }
    if (specialOne) {
        document.getElementById("meta2").style.visibility = "visible";
    }
    if (rareOne) {
        document.getElementById("meta3").style.visibility = "visible";
    }
    if (legendaryOne) {
        document.getElementById("meta4").style.visibility = "visible";
    }


    if (standardTwo) {
        document.getElementById("meta5").style.visibility = "visible";
    }
    if (specialTwo) {
        document.getElementById("meta6").style.visibility = "visible";
    }
    if (rareTwo) {
        document.getElementById("meta7").style.visibility = "visible";
    }
    if (legendaryTwo) {
        document.getElementById("meta8").style.visibility = "visible";
    }


    if (standardThree) {
        document.getElementById("meta9").style.visibility = "visible";
    }
    if (specialThree) {
        document.getElementById("meta10").style.visibility = "visible";
    }
    if (rareThree) {
        document.getElementById("meta11").style.visibility = "visible";
    }
    if (legendaryThree) {
        document.getElementById("meta12").style.visibility = "visible";
    }


    if (standardFour) {
        document.getElementById("meta13").style.visibility = "visible";
    }
    if (specialFour) {
        document.getElementById("meta14").style.visibility = "visible";
    }
    if (rareFour) {
        document.getElementById("meta15").style.visibility = "visible";
    }
    if (legendaryFour) {
        document.getElementById("meta16").style.visibility = "visible";
    }


    if (standardOne == false) {
        let tempElement = document.getElementById("meta1");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item1");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (specialOne == false) {
        let tempElement = document.getElementById("meta2");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item2");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (rareOne == false) {
        let tempElement = document.getElementById("meta3");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item3");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (legendaryOne == false) {
        let tempElement = document.getElementById("meta4");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item4");
        tempSec.parentNode.removeChild(tempSec);
    }



    if (standardTwo == false) {
        let tempElement = document.getElementById("meta5");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item5");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (specialTwo == false) {
        let tempElement = document.getElementById("meta6");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item6");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (rareTwo == false) {
        let tempElement = document.getElementById("meta7");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item7");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (legendaryTwo == false) {
        let tempElement = document.getElementById("meta8");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item8");
        tempSec.parentNode.removeChild(tempSec);
    }



    if (standardThree == false) {
        let tempElement = document.getElementById("meta9");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item9");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (specialThree == false) {
        let tempElement = document.getElementById("meta10");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item10");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (rareThree == false) {
        let tempElement = document.getElementById("meta11");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item11");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (legendaryThree == false) {
        let tempElement = document.getElementById("meta12");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item12");
        tempSec.parentNode.removeChild(tempSec);
    }


    if (standardFour == false) {
        let tempElement = document.getElementById("meta13");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item13");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (specialFour == false) {
        let tempElement = document.getElementById("meta14");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item14");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (rareFour == false) {
        let tempElement = document.getElementById("meta15");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item15");
        tempSec.parentNode.removeChild(tempSec);
    }

    if (legendaryFour == false) {
        let tempElement = document.getElementById("meta16");
        tempElement.parentNode.removeChild(tempElement);
        let tempSec = document.getElementById("item16");
        tempSec.parentNode.removeChild(tempSec);
    }



    if (standardOne || specialOne || rareOne || legendaryOne ||
        standardTwo || specialTwo || rareTwo || legendaryTwo ||
        standardThree || specialThree || rareThree || legendaryThree ||
        standardFour || specialFour || rareFour || legendaryFour) {
        let tempElement = document.getElementById("nonfts");
        tempElement.parentNode.removeChild(tempElement);
    }

    if (standardOne == false && specialOne == false && rareOne == false && legendaryOne == false &&
        standardTwo == false && specialTwo == false && rareTwo == false && legendaryTwo == false &&
        standardThree == false && specialThree == false && rareThree == false && legendaryThree == false &&
        standardFour == false && specialFour == false && rareFour == false && legendaryFour == false) {
        document.getElementById("nonfts").style.visibility = 'visible';
    }

};

getNFTObjs();