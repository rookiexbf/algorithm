// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路和问题：穷举，在递归的前后时机做选择和撤回
var permute = function (nums) {
  let res = [];
  let cur = [];
  let length = nums.length;
  dp();
  return res;

  function dp() {
    if (cur.length == length) {
      res.push([...cur]);
      return;
    }
    for (let i = 0; i < length; i++) {
      if (cur.indexOf(nums[i]) !== -1) continue;
      cur.push(nums[i]);
      dp();
      cur.pop();
    }
  }
};
