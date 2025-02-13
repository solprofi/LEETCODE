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
const sumRootToLeaf = root => {
  let res = 0;

  const dfs = (node, pathSum) => {
    if (!node) {
      return 0;
    }

    const currSum = pathSum << 1 | node.val;

    if (!node.left && !node.right) {
      res += currSum;
      return;
    }

    dfs(node.left, currSum);
    dfs(node.right, currSum);
  }

  return res;
}

// MORRIS Traversal
const sumRootToLeafMorris = root => {
  let res = 0;
  let curr = root;
  let pred;
  let currPathSum = 0;

  while(curr) {
    if (!curr.left) {
      currPathSum = (currPathSum << 1) | curr.val;

      if (!curr.right) {
        res += currPathSum;
      }

      curr = curr.right;
    } else {
      pred = curr.left;
      let step = 1;

      while (pred.right && pred.right !== curr) {
        pred = pred.right;
        step++;
      }

      if (!pred.right) {
        currPathSum = (currPathSum << 1) | curr.val;

        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;

        if (!pred.left) {
          res += currPathSum;
        }

        for (let i = 0; i < step; i++) {
          currPathSum >>= 1;
        }

        curr = curr.right;
      }
    }
  }

  return res;
}