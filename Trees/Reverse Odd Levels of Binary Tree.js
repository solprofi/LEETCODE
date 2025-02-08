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

// dfs
const reverse = root => {
  const dfs = (leftChild, rightChild, level) => {
    // Since it's a perfect tree, we can only check for one child
    if (!leftChild) {
      return;
    }

    // if level is odd, swap values
    if (level % 2 === 1) {
      [leftChild.val, rightChild.val] = [rightChild.val, leftChild.val];
    }

    dfs(leftChild.left, rightChild.right, level + 1);
    dfs(rightChild.left, leftChild.right, level + 1);
  }

  dfs(root.left, root.right, 1);

  return root;
}