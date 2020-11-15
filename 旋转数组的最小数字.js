/**
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  let mid = low;
  while (numbers[low] >= numbers[high]) {
    if (low + 1 == high) {
      mid = high;
      break;
    }
    mid = Math.floor((low + high) / 2);
    if (numbers[high] > numbers[mid]) {
      high = mid;
    } else if (numbers[high] < numbers[mid]) {
      low = mid;
    } else {
      high -= 1;
    }
  }
  return numbers[mid];
};
