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
const widthOfBinaryTree = root => {
  const q = new Deque([[root, 0]]);
  let maxW = 1;

  while (q.size()) {
    const levelSize = q.size();
    const offset = q.front()[1];
    let currNode;

    for (let i = 0; i < levelSize; i++) {
      currNode = q.popFront();
      const {left, right} = currNode[0];
      const parentIndex = currNode[1];

      if (left) {
        q.pushBack([left, (parentIndex - offset) * 2]);
      }
      if (right) {
        q.pushBack([right, (parentIndex - offset) * 2 + 1]);
      }
    }

    maxW = Math.max(maxW, currNode[1] - offset + 1);
  }

  return maxW;
}