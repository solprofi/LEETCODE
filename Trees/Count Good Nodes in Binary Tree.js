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
// with outer variable
const goodNodes = root => {
  let count = 0;

  const dfs = (node, prevMax) => {
    if (!node) {
      return;
    }

    if (node.val >= prevMax) {
      count++;
    }

    const newMax = Math.max(prevMax, node.val);

    dfs(node.left, newMax);
    dfs(node.right, newMax);
  }

  dfs(root, root.val);

  return count;
}

// without outer var
const goodNodes2 = root => {
  const countNodes = (node, prevMax) => {
    if (!node) {
      return 0;
    }

    if (node.val >= prevMax) {
      const newMax = Math.max(prevMax, node.val);

      return 1 + countNodes(node.left, newMax) + countNodes(node.right, newMax);
    }

    return countNodes(node.left, prevMax) + countNodes(node.right, prevMax);
  }

  return countNodes(root, root.val);
}