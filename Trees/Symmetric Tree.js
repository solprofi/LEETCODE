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
 * @return {boolean}
 */
const isSymmetric = root => {
  return !root || isMirrorTrees(root.left, root.right);
}

const isMirrorTrees = (left, right) => {
  if (!left || !right) {
    return right === left;
  }

  if (left.val !== right.val) {
    return false;
  }

  return isMirrorTrees(left.left, right.right) &&
    isMirrorTrees(left.right, right.left);
}