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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBSTIterative = (root, val) => {
  let curr = root;

  while (curr && curr.val !== val) {
    if (val < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }

  return curr;
}

const searchBSTRecursive= (root, val) => {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBSTRecursive(root.left, val);
  }

  return searchBSTRecursive(root.right, val);
}