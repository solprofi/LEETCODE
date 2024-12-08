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
// recursive
const preorderTraversal = root => {
  const result = [];

  const dfs = node => {
    if (!node) {
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

// iterative
const preorderIterative = root => {
  const stack = [];
  const result = [];

  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      result.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    curr = curr.right;
  }

  return result;
}