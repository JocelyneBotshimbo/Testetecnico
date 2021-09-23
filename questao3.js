function maxStockProfit(pricesArr){
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for(var i =0; i < pricesArr.length; i++){
        if (changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i+1];

        if (sellPrice < buyPrice){
            changeBuyPrice = true;
        } else{
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }

    return maxProfit;

}

console.log(maxStockProfit([7, 1, 5, 3, 6, 4]));

console.log(maxStockProfit([7, 6, 4, 3, 1]))





