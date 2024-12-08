const isSameTree = (p, q) => {
  if (!p || !q) {
    return p === q;
  }

  return p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right);
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  const dfs = node => {
    if (!node) {
      return false;
    }

    if (node.val === subRoot.val && isSameTree(node, subRoot)) {
      return true;
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}