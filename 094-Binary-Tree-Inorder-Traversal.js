/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var res = [];
    
  inorder(root, res);
    
  return res;
};

function inorder(root, res) {
  if (!root) return;
    
  if (root.left) inorder(root.left, res);
    
  res.push(root.val);
    
  if (root.right) inorder(root.right, res);
}
