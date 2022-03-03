// 给你两个 m x n 的二进制矩阵 grid1 和 grid2 ，它们只包含 0 （表示水域）和 1 （表示陆地）。一个 岛屿 是由 四个方向 （水平或者竖直）上相邻的 1 组成的区域。任何矩阵以外的区域都视为水域。

// 如果 grid2 的一个岛屿，被 grid1 的一个岛屿 完全 包含，也就是说 grid2 中该岛屿的每一个格子都被 grid1 中同一个岛屿完全包含，那么我们称 grid2 中的这个岛屿为 子岛屿 。

// 请你返回 grid2 中 子岛屿 的 数目 。

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */

// 思路：根据自岛屿的定义，假设grid2中的一片陆地在grid1对应的区域是水域，那么该岛屿肯定不是子岛。排除这些岛屿后剩下的就是子岛

var countSubIslands = function (grid1, grid2) {
  let son = 0;
  let row = grid1.length;
  let col = grid1[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        flood(i, j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] == 1) {
        son++;
        flood(i, j);
      }
    }
  }

  return son;

  function flood(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return;
    }
    if (grid2[i][j] == 0) {
      return;
    }
    grid2[i][j] = 0;
    flood(i, j + 1);
    flood(i, j - 1);
    flood(i + 1, j);
    flood(i - 1, j);
  }
};
