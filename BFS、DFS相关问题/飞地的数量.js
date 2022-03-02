// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。
// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

// 思路：同求封闭岛屿数量思路相同，排除矩阵边界的岛屿后直接计算剩余的岛屿数量

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let res = 0;
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    flood(i, 0);
    flood(i, col - 1);
  }

  for (let i = 0; i < col; i++) {
    flood(0, i);
    flood(row - 1, i);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        res++;
      }
    }
  }

  return res;

  function flood(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return;
    }
    if (grid[i][j] == 0) {
      return;
    }
    grid[i][j] = 0;
    flood(i, j + 1);
    flood(i, j - 1);
    flood(i + 1, j);
    flood(i - 1, j);
  }
};
