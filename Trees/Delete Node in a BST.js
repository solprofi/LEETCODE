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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  //   Two steps: - find the node to delete
  //   - replace the node

  //   base case
  if (!root) {
    return null;
  }

  //   find the node
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    //   node is found. If the node has only one child, return it
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    //   both nodes are present - find the successor node
    let curr = root.right;
    while (curr.left) {
      curr = curr.left;
    }

    root.val = curr.val;
    //   the successor node is in the right place, now remove it
    root.right = deleteNode(root.right, curr.val);
  }

  return root;
};