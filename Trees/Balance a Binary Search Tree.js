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
 * @return {TreeNode}
 */
const balanceBST = root => {
//   first get inorder traversal of the tree
//   which will give a sorted arr in asc order
  const arr = [];

  const dfs = node => {
    if (!node) {
      return;
    }

    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }

//   create a new tree by recursively going over
//   the array in binary search-like fashion
  const createTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = left + Math.floor((right - left) / 2);
    const node  = new TreeNode(arr[mid]);

    node.left = createTree(left, mid - 1);
    node.right = createTree(mid + 1, right);

    return node;
  }

  dfs(root);
  return createTree(0, arr.length - 1);
}