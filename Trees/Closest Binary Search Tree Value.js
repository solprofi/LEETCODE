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
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  const sortedArr = [];
  getInorderTraversal(root, sortedArr);

  let closest = Number.MAX_SAFE_INTEGER;

  for (const value of sortedArr) {
    if (Math.abs(value - target) < Math.abs(closest - target)) {
      closest = value;
    }
  }

  return closest;
}

const getInorderTraversal = (root, result) => {
  if (!root) {
    return;
  }

  getInorderTraversal(root.left, result);

  result.push(root.val);

  getInorderTraversal(root.right, result);
}