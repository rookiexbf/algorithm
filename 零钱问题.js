// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。


//自底向上
function coinChange(coins,amout){
  let dp = new Array(amout+1).fill(amout+1)
  dp[0]=0
  for(let coin of coins){
    if(amout<coin) continue
    for(let i = coin;i<=amout;i++){
      dp[i] = Math.min(dp[i-coin]+1,dp[i])
    }
  }
  return dp[amout]<amout+1?dp[amout]:-1
}
// 递归
  function coinChange(coins,amout){
    if(amout==0)return 0;
    if(amout<0)return -1
    for(let coin of coins){
      if(amout<coin) continue
      
    }
  } 