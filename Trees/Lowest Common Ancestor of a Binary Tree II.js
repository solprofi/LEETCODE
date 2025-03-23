
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  // nodes are not guaranteed to be in a tree
  // track that each node is found with bool variables
  // if both are found, return result of lca, otherwise return null
  // to make sure that we search correctly, don't return prematurely and recurse the tree first

  let isPFound = false;
  let isQFound = false;

  const lca = (node, p, q) => {
    if (!node) {
      return null;
    }
    // don't check if node === p || node === q right away
    // recurse on the tree first
    const leftSearchResult = lca(node.left, q, p);
    const rightSearchResult = lca(node.right, q, p);

    if (node === p) {
      isPFound = true;
      return node;
    }

    if (node === q) {
      isQFound = true;
      return node;
    }

    if (leftSearchResult && rightSearchResult) {
      return node;
    }

    if (!leftSearchResult) {
      return rightSearchResult;
    }

    return leftSearchResult;
  }

  const result = lca(root, p, q);
  if (isPFound && isQFound) {
    return result;
  }

  return null;
}