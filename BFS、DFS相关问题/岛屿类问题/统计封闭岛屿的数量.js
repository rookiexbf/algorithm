// 二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，封闭岛是一个 完全 由1包围（左、上、右、下）的岛。

// 请返回 封闭岛屿 的数目。

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 思路：同求岛屿数量思路相同，但是排除矩阵边界的岛屿

var closedIsland = function (grid) {
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
      if (grid[i][j] == 0) {
        res++;
        flood(i, j);
      }
    }
  }
  return res;

  function flood(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return;
    }
    if (grid[i][j] == 1) {
      return;
    }
    grid[i][j] = 1;
    flood(i, j + 1);
    flood(i, j - 1);
    flood(i + 1, j);
    flood(i - 1, j);
  }
};
