// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 示例 2：
// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

/**
 * @param {character[][]} grid
 * @return {number}
 */

// 思路：找到一个陆地之后，岛屿数量+1，并且深度遍历，感染周围相邻的的陆地。
var numIslands = function (grid) {
  let res = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        res++;
        flood(i, j);
      }
    }
  }
  return res;

  function flood(i, j) {
    if (i >= row || i < 0 || j >= col || j < 0) {
      return;
    }
    if (grid[i][j] == 0) {
      return;
    }
    grid[i][j] = 0;
    flood(i + 1, j);
    flood(i - 1, j);
    flood(i, j + 1);
    flood(i, j - 1);
  }
};
