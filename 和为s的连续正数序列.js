/**
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 */
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = [];
  let left = 1;
  let right = 1;
  let sum = 0;
  while (left <= target / 2) {
    if (sum < target) {
      sum += right++;
    } else if (sum > target) {
      sum -= left++;
    } else {
      let temp = [];
      for (var k = left; k < right; k++) {
        temp[k - left] = k;
      }
      res.push(temp);
      sum -= left++;
      sum += right++;
    }
  }
  return res;
};
