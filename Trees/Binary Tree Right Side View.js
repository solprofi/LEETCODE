const dfs = (root, level, result) => {
  if (!root) {
    return;
  }

  if (result.length === level) {
    result.push(root.val);
  }

  dfs(root.right, level + 1, result);
  dfs(root.left, level + 1, result);
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
 * @return {number[]}
 */
const rightSideViewRecursive = root => {
  const result = [];
  dfs(root, 0, result);

  return result;
}





const rightSideViewBFS = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const deque = new Deque([root]);

  while (deque.size()) {
    let size = deque.size();
    let rightVal;

    while (size) {
      const front = deque.popFront();
      rightVal = front.val;

      if (front.left) {
        deque.pushBack(front.left);
      }

      if (front.right) {
        deque.pushBack(front.right);
      }

      size--;
    }

    result.push(rightVal);
  }

  return result;
}