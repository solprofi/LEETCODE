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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  let count = 0;
  let result;

  const dfs = node => {
    if (!node) {
      return;
    }

    dfs(node.left);

    count++;
    if (count === k) {
      result = node.val;
    }

    dfs(node.right);
  }

  dfs(root);
  return result;
}

const kthSmallestIterative = (root, k) => {
  const stack = [root];
  let count = 0;
  let curr = root;

  while (curr || stack.length) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();

    count++;
    if (count === k) {
      return curr.val;
    }

    curr = curr.right;
  }
}