// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 思路:直接遍历二叉树，对比所有的叶子结点的高度取最大值
var maxDepth = function (root) {
  let res = 0;
  let depth = 0;
  function traverse(root) {
    if (!root) {
      res = Math.max(depth, res);
      return;
    }
    depth++;
    traverse(root.left);
    traverse(root.right);
    depth--;
  }
  traverse(root);
  return res;
};

// 思路：分解问题，求子树最大深度
var maxDepth = function (root) {
  if (!root) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};
