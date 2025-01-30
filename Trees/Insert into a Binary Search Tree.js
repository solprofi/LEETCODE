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
// Iterative
const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }

  let curr = root;

  while(curr) {
    if (val < curr.val) {
      if (curr.left) {
        curr = curr.left;
      } else {
        curr.left = new TreeNode(val);
        break;
      }
    } else {
      if (curr.right) {
        curr = curr.right;
      } else {
        curr.right = new TreeNode(val);
        break;
      }
    }
  }

  return root;
};

//Recursive {
const insertIntoBST2 = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }

  if (val > root.val) {
    root.right = insertIntoBST2(root.right, val);
  } else {
    root.left = insertIntoBST2(root.left, val);
  }

  return root;
}