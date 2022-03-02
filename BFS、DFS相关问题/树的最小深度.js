// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

// 思路:广度优先遍历

var minDepth = function (root) {
  if (!root) return 0;
  let queue = [];
  depth = 1;
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      if (cur.left !== null) {
        queue.push(cur.left);
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
      if (cur.right == null && cur.left == null) {
        return depth;
      }
    }
    depth++;
  }
};
