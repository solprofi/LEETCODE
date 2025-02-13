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
const findTilt = root => {
  let res = 0;

  const dfs = node => {
    if (!node) {
      return 0;
    }

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);

    res += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
  }

  dfs(root);

  return res;
}