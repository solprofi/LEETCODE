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
const levelOrderBottom = root => {
  const res = new Deque();
  const q = new Deque([root]);

  while (q.front()) {
    let size = q.size();
    const level = [];

    while (size) {
      const {val, left, right} = q.popFront();

      if (left) {
        q.pushBack(left);
      }
      if (right) {
        q.pushBack(right);
      }

      level.push(val);
    }

    res.pushFront(level);
    size--;
  }

  return res.toArray();
}