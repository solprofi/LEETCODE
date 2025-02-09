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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  const dfs = (node, currSum) => {
    if (!node) {
      return false;
    }

    const sum = currSum + node.val;

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    return dfs(node.left, sum) || dfs(node.right, sum);
  }

  return dfs(root, 0);
}