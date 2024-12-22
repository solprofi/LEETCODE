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
const zigzagLevelOrder = root => {
  if (!root) {
    return [];
  }

  const q = new Deque([root]);
  let leftToRight = true;
  const result = [];

  while(q.size()) {
    const level = [];
    const size = q.size();

    for (let i = 0; i < size; i++) {
      const temp = q.popFront();
      const index = leftToRight ? i : size - 1 - i;
      level[index] = temp.val;

      if (temp.left) {
        q.pushBack(temp.left);
      }
      if (temp.right) {
        q.pushBack(temp.right);
      }
    }

    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}