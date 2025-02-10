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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  const set = {};

  const dfs = node => {
    if (!node) {
      return false;
    }

    if (node.val in set) {
      return true;
    } else {
      set[k - node.val] = true;
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}