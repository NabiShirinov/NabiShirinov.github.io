var btc = document.getElementById("btc");
var eth = document.getElementById("eth");
var bnb = document.getElementById("bnb");
var mana = document.getElementById("mana");

var liveprice = {
    "async" : true ,
    "scroosDomain" : true ,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cdecentraland&vs_currencies=usd",

    "method" :"GET",
    "headers" : {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    bnb.innerHTML = response.binancecoin.usd;
    mana.innerHTML = response.decentraland.usd;
})
;