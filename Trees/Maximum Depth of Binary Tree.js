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
// DFS Recursive
const maxDepth = root => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//BFS with Queue
const maxDepth2 = root => {
  const q = new Queue();

  if (root) {
    q.push(root);
  }

  let level = 0;

  while(q.size()) {
    const size = q.size();

    for(let i = 0; i < size; i++) {
      const {left, right} = q.pop();

      if (left) {
        q.push(left);
      }

      if (right) {
        q.push(right);
      }
    }

    level++;
  }

  return level;
}