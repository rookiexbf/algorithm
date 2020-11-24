/**
给出一个完全二叉树，求出该树的节点个数。

说明：

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

示例:

输入: 
    1
   / \
  2   3
 / \  /
4  5 6

输出: 6
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
var countNodes = function (root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
// BFS
var countNodes = function (root) {
  if (!root) return 0;
  let queue = [];
  queue.push(root);
  let num = 0;
  while (queue.length) {
    let node = queue.shift();
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
    num++;
  }
  return num;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 满二叉树加位运算
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  let left = root.left;
  let right = root.right;
  let leftHigh = 0;
  let rightHigh = 0;
  while (left) {
    left = left.left;
    leftHigh++;
  }
  while (right) {
    right = right.left;
    rightHigh++;
  }
  if (leftHigh == rightHigh) {
    return countNodes(root.right) + (1 << leftHigh);
  } else {
    return countNodes(root.left) + (1 << rightHigh);
  }
};
