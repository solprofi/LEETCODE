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
const reverseOddLevels = root => {
  let q = new Deque([root]);

  let level = 0;

  while(q.front()) {
    let size = q.size();

    if (level % 2 === 1) {
      const temp = q.toArray();

      let l = 0;
      let r = size - 1;

      while (l < r) {
        [temp[l].val, temp[r].val] = [temp[r].val, temp[l].val];
        l++;
        r--;
      }
    }

    while (size) {
      const {left, right} = q.popFront();

      if (left) {
        q.pushBack(left);
        q.pushBack(right);
      }

      size--;
    }

    level++
  }

  return root;
}