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
 * @return {number[][]}
 */
// Assume Deque class is implemented with methods size, pushBack, popFront and front
const levelOrder = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const deque = new Deque([root]);

  while (deque.size()) {
    let size = deque.size();
    const level = [];

    while (size) {
      const front = deque.popFront();
      level.push(front.val);

      if (front.left) {
        deque.pushBack(front.left);
      }

      if (front.right) {
        deque.pushBack(front.right);
      }

      size--;
    }

    result.push(level);
  }

  return result;
}