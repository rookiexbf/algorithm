/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：
 */

/**
 * @param {number} n
 * @return {number}
 */
// 递归超时
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// 使用选择自下而上
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  let pre2 = 1;
  let pre1 = 2;
  for (let i = 2; i < n; i++) {
    let tem = pre1 + pre2;
    pre2 = pre1;
    pre1 = tem;
  }
  return pre1;
};
