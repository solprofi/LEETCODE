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
const sumRootToLeaf = root => {
  let res = 0;

  const dfs = (node, pathSum) => {
    if (!node) {
      return 0;
    }

    const currSum = pathSum << 1 | node.val;

    if (!node.left && !node.right) {
      res += currSum;
      return;
    }

    dfs(node.left, currSum);
    dfs(node.right, currSum);
  }

  return res;
}