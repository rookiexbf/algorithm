/**
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  debugger;
  if (matrix == null || matrix.length == 0 || matrix[0].length <= 1) {
    return matrix;
  }
  let arr = [];
  let row = matrix.length;
  let column = matrix[0].length;
  let left = 0;
  let right = column - 1;
  let top = 0;
  let bottom = row - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= 0; i--) {
      arr.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = left; i <= right; i++) {
      arr.push(matrix[bottom][i]);
      left++;
    }
  }
  return arr;
};
