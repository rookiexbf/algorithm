// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/coin-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 自顶向下
// 递归
// 思路和问题：暴力破解，遍历N叉树。后面发现会超时，用一个map缓存计算结果（剪枝）
let coinChange = function (coins, amount) {
  let map = new Map();
  function dp(amount) {
    if (map.has(amount)) return map.get(amount);
    let min = Infinity;
    if (amount == 0) return 0;
    if (amount == -1) return -1;
    for (coin in coins) {
      if (amount - coins[coin] < 0) continue;
      let res = dp(amount - coins[coin]);
      if (res == -1) continue;
      min = Math.min(res + 1, min);
    }
    map.set(amount, min == Infinity ? -1 : min);
    return map.get(amount);
  }
  return dp(amount);
};

// 自底向上
// 遍历
let coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }
  console.log(dp);
  return dp[amount] == amount + 1 ? -1 : dp[amount];
};
