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
 * @return {number[]}
 */
const getLonelyNodes = root => {
  const res = [];

  const dfs = node => {
    if (!node || (!node.left && !node.right)) {
      return;
    }

    if (!node.left) {
      res.push(node.right.val);
    } else if (!node.right) {
      res.push(node.left.val);
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return res;
}