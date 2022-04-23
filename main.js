async function login() {
    const connectButton = document.getElementById("connectButton");
    console.log(connectButton) //1

    connectButton.innerHTML = "Connecting wallet...";
    let account = null;
    const provider = window.ethereum;
    console.log(account) //2
    console.log(provider) //3

    if (provider == null) {
        connectButton.innerHTML = "Connect wallet";
    }

    async function checkAccounts() {
        if (provider) {
            const accs = await provider.request({ method: 'eth_accounts' });
            return accs[0];
        }
    }

    console.log(accs[0]) //4

    // check if we've already connected to a wallet
    await checkAccounts()
        .then(acc => account = acc)
        .catch(err => console.err(err));

    if (account) {
        connectButton.innerHTML = account.substring(0, 5) + "..." + account.substring(account.length - 4, account.length);
    } else {
        connectButton.innerHTML = "Connect wallet";
    }

    console.log(connectButton.innerHTML) //5

    function handleConnectWallet() {
        provider.request({ method: 'eth_requestAccounts' })
            .then(accs => {
                account = accs[0];
                connectButton.innerHTML = account.substring(0, 5) + "..." + account.substring(account.length - 4, account.length);
            })
            .catch(err => connectButton.innerHTML = "Connect metamask wallet to mint");
    }

    console.log(connectButton.innerHTML) //6

    connectButton.addEventListener('click', _ => {
        if (provider) {
            if (!account) {
                handleConnectWallet();
            }
        } else {
            window.location = "https://metamask.io/";
        }
    })

    const serverUrl = "https://q4kxo8ml4b0b.usemoralis.com:2053/server";
    const appId = "ZyR5FjsvCuAGhvW4W6S4bCuWFdRV6XfhRZjWS9PZ";
    Moralis.start({ serverUrl, appId });


    async function solveContract() {

        //Get the NFTs of the SC Owned by the User (PASS STRING ADDRESS IF DOESNT WORK):
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

        standardOne = false;
        specialOne = false;
        rareOne = false;
        legendaryOne = false;

        standardTwo = false;
        specialTwo = false;
        rareTwo = false;
        legendaryTwo = false;

        standardThree = false;
        specialThree = false;
        rareThree = false;
        legendaryThree = false;

        standardFour = false;
        specialFour = false;
        rareFour = false;
        legendaryFour = false;


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
    }
    async function buttonLogic() {
        //document.getElementById("metalogin").onclick = login;

        document.getElementById("meta1").hidden = true;
        document.getElementById("meta2").hidden = true;
        document.getElementById("meta3").hidden = true;
        document.getElementById("meta4").hidden = true;
        document.getElementById("meta5").hidden = true;
        document.getElementById("meta6").hidden = true;
        document.getElementById("meta7").hidden = true;
        document.getElementById("meta8").hidden = true;
        document.getElementById("meta9").hidden = true;
        document.getElementById("meta10").hidden = true;
        document.getElementById("meta11").hidden = true;
        document.getElementById("meta12").hidden = true;
        document.getElementById("meta13").hidden = true;
        document.getElementById("meta14").hidden = true;
        document.getElementById("meta15").hidden = true;
        document.getElementById("meta16").hidden = true;
    }
    async function getLinks() {
        if (standardOne == true) {
            document.getElementById("meta1").hidden = false;
        }
        if (specialOne == true) {
            document.getElementById("meta2").hidden = false;
        }
        if (rareOne == true) {
            document.getElementById("meta3").hidden = false;
        }
        if (legendaryOne == true) {
            document.getElementById("meta4").hidden = false;
        }


        if (standardTwo == true) {
            document.getElementById("meta5").hidden = false;
        }
        if (specialTwo == true) {
            document.getElementById("meta6").hidden = false;
        }
        if (rareTwo == true) {
            document.getElementById("meta7").hidden = false;
        }
        if (legendaryTwo == true) {
            document.getElementById("meta8").hidden = false;
        }


        if (standardThree == true) {
            document.getElementById("meta9").hidden = false;
        }
        if (specialThree == true) {
            document.getElementById("meta10").hidden = false;
        }
        if (rareThree == true) {
            document.getElementById("meta11").hidden = false;
        }
        if (legendaryThree == true) {
            document.getElementById("meta12").hidden = false;
        }


        if (standardFour == true) {
            document.getElementById("meta13").hidden = false;
        }
        if (specialFour == true) {
            document.getElementById("meta14").hidden = false;
        }
        if (rareFour == true) {
            document.getElementById("meta15").hidden = false;
        }
        if (legendaryFour == true) {
            document.getElementById("meta16").hidden = false;
        }
    }

    solveContract;
    buttonLogic;
    getLinks;
}

login;