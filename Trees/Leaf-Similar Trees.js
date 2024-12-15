/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
  const getLeafs = root => {
    if (!root) {
      return "";
    }

    if (!root.left && !root.right) {
      return root.val + ',';
    }

    return getLeafs(root.left) + getLeafs(root.right);
  }

  return getLeafs(root1) === getLeafs(root2);
}