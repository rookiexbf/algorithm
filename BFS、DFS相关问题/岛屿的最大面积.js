// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 思路：在求岛屿的数量基础上额外记录岛屿的面积

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxS = 0;
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        maxS = Math.max(flood(i, j), maxS);
      }
    }
  }
  return maxS;

  function flood(i, j) {
    if (i >= row || i < 0 || j >= col || j < 0) {
      return 0;
    }
    if (grid[i][j] == 0) {
      return 0;
    }
    grid[i][j] = 0;
    return flood(i + 1, j) + flood(i - 1, j) + flood(i, j + 1) + flood(i, j - 1) + 1;
  }
};
