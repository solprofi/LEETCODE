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
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
  const result = [];

  const dfs = (node, currentSum, path) => {
    if (!node) {
      return 0;
    }

    const sum = currentSum + node.val;
    path.push(node.val);

    if (targetSum === sum && !node.left && !node.right) {
      result.push([...path]);
    }

    dfs(node.left, sum, path);
    dfs(node.right, sum, path);

    path.pop();
  }

  dfs(root, 0, []);

  return result;
}