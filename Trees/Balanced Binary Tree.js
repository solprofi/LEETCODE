/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const getHeight = root => {
  if (!root) {
    return 0;
  }

  const leftHeight = getHeight(root.left);
  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = getHeight(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return 1 + Math.max(leftHeight, rightHeight);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  return getHeight(root) !== -1;
}