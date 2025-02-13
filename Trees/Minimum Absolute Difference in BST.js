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
const getMinimumDifference = root => {
  let res = Number.MAX_SAFE_INTEGER;
  let prev = null;

  const dfs = node => {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (prev !== null) {
      res = Math.min(res, node.val - prev);
    }
    prev = node.val;

    dfs(node.right);
  }

  dfs(root);

  return res;
}

const findPredecessor = node => {
  let temp = node.left;

  while (temp.right && temp.right !== node) {
    temp = temp.right;
  }

  return temp;
}

const minDiffMorris = root => {
  let res = Number.MAX_SAFE_INTEGER;
  let prev = Number.MAX_SAFE_INTEGER;

  let curr = root;

  while(curr) {
    if (!curr.left) {
      res = Math.min(res, Math.abs(curr.val - prev));
      prev = curr.val;
      curr = curr.right;
    } else {
      const pred = findPredecessor(curr);

      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;
        res = Math.min(res, Math.abs(curr.val - prev));
        prev = curr.val;
        curr = curr.right;
      }
    }
  }

  return res;
}