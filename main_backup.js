//==================AUTHENTICATION====================
const serverUrl = "https://8q6cpdoqxqro.usemoralis.com:2053/server";
const appId = "eSVr2okUb8q89yg2xttR3TQymdyqRlNkGLPk0nli";
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
    //debug--------->
    const debugOptions = { chain: "eth", address: "0xa8878db227D4f67427E7611dE026F5078Af4194b", token_address: "0x73C7F078DBc1D961DF33aDa0EF9caC89c7887801" };
    const debugNFTs = await Moralis.Web3API.account.getNFTsForContract(debugOptions);
    console.log(debugNFTs);





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
            rarityOwnedContractOne[i] = oneTempMeta.attributes[2].value;
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


    for (var i = 0; i < rarityOwnedContractOne.length; i++) {
        if (rarityOwnedContractOne[i] == "Standard") {
            standardOne = true;
        }
        if (rarityOwnedContractOne[i] == "Special") {
            specialOne = true;
        }
        if (rarityOwnedContractOne[i] == "Rare") {
            rareOne = true;
        }
        if (rarityOwnedContractOne[i] == "Legendary") {
            legendaryOne = true;
        }
    }


    for (var i = 0; i < rarityOwnedContractTwo.length; i++) {
        if (rarityOwnedContractTwo[i] == "Standard") {
            standardTwo = true;
        }
        if (rarityOwnedContractTwo[i] == "Special") {
            specialTwo = true;
        }
        if (rarityOwnedContractTwo[i] == "Rare") {
            rareTwo = true;
        }
        if (rarityOwnedContractTwo[i] == "Legendary") {
            legendaryTwo = true;
        }
    }

    for (var i = 0; i < rarityOwnedContractThree.length; i++) {
        if (rarityOwnedContractThree[i] == "Standard") {
            standardThree = true;
        }
        if (rarityOwnedContractThree[i] == "Special") {
            specialThree = true;
        }
        if (rarityOwnedContractThree[i] == "Rare") {
            rareThree = true;
        }
        if (rarityOwnedContractThree[i] == "Legendary") {
            legendaryThree = true;
        }
    }

    for (var i = 0; i < rarityOwnedContractFour.length; i++) {
        if (rarityOwnedContractFour[i] == "Standard") {
            standardFour = true;
        }
        if (rarityOwnedContractFour[i] == "Special") {
            specialFour = true;
        }
        if (rarityOwnedContractFour[i] == "Rare") {
            rareFour = true;
        }
        if (rarityOwnedContractFour[i] == "Legendary") {
            legendaryFour = true;
        }
    }


    if (standardOne) {
        document.getElementById("meta1").style.visibility = 'visible';
        document.getElementById("item1").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractOneVar.result.length; i++) {
            tokenID.push(armorNFTsContractOneVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text1").parentNode.appendChild(elm);
    }
    if (specialOne) {
        document.getElementById("meta2").style.visibility = "visible";
        document.getElementById("item2").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractOneVar.result.length; i++) {
            tokenID.push(armorNFTsContractOneVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text2").parentNode.appendChild(elm);
    }
    if (rareOne) {
        document.getElementById("meta3").style.visibility = "visible";
        document.getElementById("item3").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractOneVar.result.length; i++) {
            tokenID.push(armorNFTsContractOneVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text3").parentNode.appendChild(elm);
    }
    if (legendaryOne) {
        document.getElementById("meta4").style.visibility = "visible";
        document.getElementById("item4").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractOneVar.result.length; i++) {
            tokenID.push(armorNFTsContractOneVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text4").parentNode.appendChild(elm);
    }


    if (standardTwo) {
        document.getElementById("meta5").style.visibility = "visible";
        document.getElementById("item5").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractTwoVar.result.length; i++) {
            tokenID.push(armorNFTsContractTwoVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text5").parentNode.appendChild(elm);
    }
    if (specialTwo) {
        document.getElementById("meta6").style.visibility = "visible";
        document.getElementById("item6").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractTwoVar.result.length; i++) {
            tokenID.push(armorNFTsContractTwoVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text6").parentNode.appendChild(elm);
    }
    if (rareTwo) {
        document.getElementById("meta7").style.visibility = "visible";
        document.getElementById("item7").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractTwoVar.result.length; i++) {
            tokenID.push(armorNFTsContractTwoVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text7").parentNode.appendChild(elm);
    }
    if (legendaryTwo) {
        document.getElementById("meta8").style.visibility = "visible";
        document.getElementById("item8").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractTwoVar.result.length; i++) {
            tokenID.push(armorNFTsContractTwoVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text8").parentNode.appendChild(elm);
    }


    if (standardThree) {
        document.getElementById("meta9").style.visibility = "visible";
        document.getElementById("item9").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractThreeVar.result.length; i++) {
            tokenID.push(armorNFTsContractThreeVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text9").parentNode.appendChild(elm);
    }
    if (specialThree) {
        document.getElementById("meta10").style.visibility = "visible";
        document.getElementById("item10").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractThreeVar.result.length; i++) {
            tokenID.push(armorNFTsContractThreeVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text10").parentNode.appendChild(elm);
    }
    if (rareThree) {
        document.getElementById("meta11").style.visibility = "visible";
        document.getElementById("item11").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractThreeVar.result.length; i++) {
            tokenID.push(armorNFTsContractThreeVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text11").parentNode.appendChild(elm);
    }
    if (legendaryThree) {
        document.getElementById("meta12").style.visibility = "visible";
        document.getElementById("item12").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractThreeVar.result.length; i++) {
            tokenID.push(armorNFTsContractThreeVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text12").parentNode.appendChild(elm);
    }


    if (standardFour) {
        document.getElementById("meta13").style.visibility = "visible";
        document.getElementById("item13").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractFourVar.result.length; i++) {
            tokenID.push(armorNFTsContractFourVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text13").parentNode.appendChild(elm);
    }
    if (specialFour) {
        document.getElementById("meta14").style.visibility = "visible";
        document.getElementById("item14").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractFourVar.result.length; i++) {
            tokenID.push(armorNFTsContractFourVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text14").parentNode.appendChild(elm);
    }
    if (rareFour) {
        document.getElementById("meta15").style.visibility = "visible";
        document.getElementById("item15").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractFourVar.result.length; i++) {
            tokenID.push(armorNFTsContractFourVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text15").parentNode.appendChild(elm);
    }
    if (legendaryFour) {
        document.getElementById("meta16").style.visibility = "visible";
        document.getElementById("item16").style.visibility = 'visible';
        let tokenID = [];
        for (var i = 0; i < armorNFTsContractFourVar.result.length; i++) {
            tokenID.push(armorNFTsContractFourVar.result[i].token_id);
        }
        const allIDs = tokenID.toString();
        let elm = document.createElement("elm");
        elm.innerText = "Token ID: " + allIDs;
        elm.style.color = '#000000';
        elm.style.fontWeight = "800";
        elm.style.textAlign = "center"
        elm.style.fontFamily = "Oswald";
        document.getElementById("text16").parentNode.appendChild(elm);
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

    }

    if (standardOne == false && specialOne == false && rareOne == false && legendaryOne == false &&
        standardTwo == false && specialTwo == false && rareTwo == false && legendaryTwo == false &&
        standardThree == false && specialThree == false && rareThree == false && legendaryThree == false &&
        standardFour == false && specialFour == false && rareFour == false && legendaryFour == false) {
        document.getElementById("nonfts").style.visibility = 'visible';
    }

};

getNFTObjs();