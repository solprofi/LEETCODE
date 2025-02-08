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
const longestZigZag = root => {
  let maxPath = 0;

  const dfs = (node, goLeft, currSteps) => {
    if (!node) {
      return;
    }

    maxPath = Math.max(maxPath, currSteps);

    if (goLeft) {
      dfs(node.left, false, currSteps + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.right, true, currSteps + 1);
      dfs(node.left, false, 1);
    }
  }

  dfs(root, true, 0);

  return maxPath;
};