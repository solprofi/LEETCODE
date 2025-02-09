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
 * @return {number[][]}
 */
const findLeaves = root => {
  const result = {};

  const dfs = node => {
    if (!node) {
      return 0;
    }

    const currLayer = Math.max(dfs(node.left), dfs(node.right));

    if (result[currLayer]) {
      result[currLayer].push(node.val);
    } else {
      result[currLayer] = [node.val];
    }

    return currLayer + 1;
  }

  dfs(root);

  return Object.values(result);
}