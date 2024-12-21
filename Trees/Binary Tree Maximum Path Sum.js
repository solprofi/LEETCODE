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
 * @return {number}
 */
const maxPathSum = root => {
  let maxSum = root.val;

  const dfs = node => {
    if (!node) {
      return 0;
    }

    const leftSum = Math.max(0, dfs(node.left));
    const rightSum = Math.max(0, dfs(node.right));

    maxSum = Math.max(maxSum, leftSum + node.val + rightSum);

    return node.val + Math.max(leftSum, rightSum);
  }

  dfs(root);

  return maxSum;
}