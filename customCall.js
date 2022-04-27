var i = 1; //  set your counter to 1

function myLoop1() { //  create a loop function
    setTimeout(function() { //  call a 3s setTimeout when the loop is called
        fetch('https://deep-index.moralis.io/api/v2/nft/0xA958fd55Be008BE82595939646d37B5Ca4Fe778D/' + i + '/metadata/resync?chain=eth&flag=uri&mode=sync', {
                headers: {
                    'accept': 'application/json',
                    'X-API-Key': 'qpwwZXW45C6gUhtMs9aL47F5vWiDq10w62XxkCfMPI0nN3bxaCIsIkXjPbxnJ72q'
                }
            })
            .then(response => response.json())
            .then(result => console.log('success:', result))
            .catch(error => console.log('error:', error));;
        console.log('Contract 4: ' + i);
        i++; //  increment the counter
        if (i <= 500) {
            myLoop1();
        }
    }, 3000)
}

myLoop1();