var maxProfit = function(prices){
    if(prices.length == 0){
        return 0;
    }
let minPrice = prices[0];
let maxProfit = 0;

for(var i = 1; i<prices.length; i++){
    var currentPrice = prices[i];
    var profit = currentPrice - minPrice;

    if(profit>maxProfit){
        maxProfit = profit;
    }
    if(currentPrice< minPrice){
        minPrice = currentPrice;  
    }
 }
    return maxProfit;

};