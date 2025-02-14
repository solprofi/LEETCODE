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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  const q = new Deque([root]);

  while(q.size()) {
    let size = q.size();
    // create flag variables to track if first node was already found
    let isFirstNodeFound = false;
    // and if nodes are siblings
    let isSiblings = false;

    while(size) {
      const node = q.popFront();

      if (!node) {
        // if null is encountered, next processed node is not a sibling
        // to previous processed node
        isSiblings = false;
      } else {
        if (node.val === x || node.val === y) {
          // if first target node is found set sibling flag to true
          if (!isFirstNodeFound) {
            isFirstNodeFound = true;
            isSiblings = true;
          } else {
            // if second node is found on the same level, return if they're not siblings
            return !isSiblings;
          }
        }

        if (node.left) {
          q.pushBack(node.left);
        }
        if (node.right) {
          q.pushBack(node.right);
        }

        // add a delimiter between each possible parent
        q.pushBack(null);
      }

      size--;
    }

    // after the level traversal if only one node was found, return false
    // since the next level's traversal will be not the same depth
    if (isFirstNodeFound) {
      return false;
    }
  }

  return false;
}