// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

//  

// 示例 1：

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2)return 0;
    let sum = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            sum += prices[i]-prices[i-1]
        }
    }
    return sum
};
var maxProfit = function(prices) {
    let dp = new Array(prices.length).fill(0).map(()=> new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][1]+prices[i],dp[i-1][0]);
        dp[i][1] = Math.max(dp[i-1][0]-prices[i],dp[i-1][1]);
    }
    return dp[prices.length-1][0]
};