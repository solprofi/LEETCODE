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
const inorderTraversal = root => {
  const result = [];

  const dfs = node => {
    if (!node) {
      return;
    }

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

//iterative
const inorderTraversalIterative = root => {
  const stack = [];
  const result = [];
  let curr = root;

  while (curr || stack.length) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
}

// Morris traversal
const findPredecessor = node => {
  let temp = node.left;

  while (temp.right && temp.right !== node) {
    temp = temp.right;
  }

  return temp;
}

const inorderMorris = root => {
  const res = [];
  let curr = root;

  while (curr) {
    if (!curr.left) {
      res.push(curr.val);
      curr = curr.right;
    } else {
      const pred = findDepth(curr);

      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;
        res.push(curr.val);
        curr = curr.right;
      }
    }
  }

  return res;
}

