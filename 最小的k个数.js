/**
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]

 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k == 0) return [];
  if (arr.length < 2) return arr;
  let midValue = arr.splice(0, 1),
    left = [],
    right = [];
  arr.forEach((el) => {
    el < midValue ? left.push(el) : right.push(el);
  });
  if (left.length == k) {
    return left;
  } else if (left.length > k) {
    return getLeastNumbers(left, k);
  } else {
    return left.concat(midValue, getLeastNumbers(right, k - left.length - 1));
  }
};
