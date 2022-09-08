// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let res = []
    function dfs(root){
        if(!root) return;
        res.push(root.val)
        let left = root.left;
        let right = root.right;
        dfs(left);
        dfs(right);
    }
    dfs(root)
    return res
};
var preorderTraversal = function(root) {
    if(!root) return [];
    let stack = [];
    let res = []
    stack.push(root)
    while(stack.length){
        let cur = stack.shift();
        if(cur){
            res.push(cur.val)
        }
        let left = cur.left;
        let right = cur.right;
        right && stack.unshift(right);
        left && stack.unshift(left);
    }
    return res 
};