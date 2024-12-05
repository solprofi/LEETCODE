const findDepth = root => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(findDepth(root.left), findDepth(root.right));
}
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
// O(N^2)
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const dfs = root => {
    if (!root) {
      return null;
    }

    const leftHeight = findDepth(root.left);
    const rightHeight = findDepth(root.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  return diameter;
}

// O(N)
const diameterOfBinaryTree2 = root => {
  let result = 0;

  const dfs = root => {
    if (!root) {
      return 0;
    }

    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);

    result = Math.max(result, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);

  return result;
}