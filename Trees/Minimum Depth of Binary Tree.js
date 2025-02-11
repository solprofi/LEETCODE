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
const minDepth = root => {
  if (!root) {
    return 0;
  }

  let res = Number.MAX_SAFE_INTEGER;

  const dfs = (node, currDepth) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      res = Math.min(res, currDepth);
    }

    dfs(node.left, currDepth + 1);
    dfs(node.right, currDepth + 1);
  }

  dfs(root);

  return res;
}

// Without extra variable
const minDepth2 = root => {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }

  if (!root.left) {
    return 1 + minDepth2(root.right);
  }

  if (!root.right) {
    return 1 + minDepth2(root.left);
  }

  return 1 + Math.min(minDepth2(root.right), minDepth2(root.left));
}

// BFS - most optimal. As soon as the first lead is found - return
const minDepth3 = root => {
  const q = new Deque([root]);

  let depth = 0;

  while(q.front()) {
    let size = q.size();

    depth++;

    while (size) {
      const { left, right } = q.popFront();

      if (!left && !right) {
        return depth;
      }

      if (left) {
        q.pushBack(left);
      }

      if (right) {
        q.pushBack(right);
      }

      size--;
    }
  }
}