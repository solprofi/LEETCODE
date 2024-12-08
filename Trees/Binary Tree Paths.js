const getPaths = (root, paths, currPath) => {
  if (!root) {
    return;
  }

  currPath += root.val;

  if (!root.left && !root.right) {
    paths.push(currPath);
  } else {
    currPath += '->';
    getPaths(root.left, paths, currPath);
    getPaths(root.right, paths, currPath);
  }
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
 * @return {string[]}
 */
const binaryTreePaths = root => {
  const result = [];

  getPaths(root, result, "");

  return result;
}