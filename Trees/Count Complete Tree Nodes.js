const getLeftHeight = root => {
  let curr = root;
  let count = 0;

  while(curr) {
    count++;
    curr = curr.left;
  }

  return count;
}

const getRightHeight = root => {
  let curr = root;
  let count = 0;

  while(curr) {
    count++;
    curr = curr.right;
  }

  return count;
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
const countNodes = root => {
  if (!root) {
    return 0;
  }

  const leftHeight = getLeftHeight(root);
  const rightHeight = getRightHeight(root);

  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}