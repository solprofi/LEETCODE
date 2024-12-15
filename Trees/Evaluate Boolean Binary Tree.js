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
 * @return {boolean}
 */
const evaluateTreeIterative = root => {
  const stack = [root];
  const values = new Map();

  while(stack.length) {
    const top = stack.pop();
    const { left, right, val } = top;

    // leaf node
    if (!left && !right) {
      values.set(top, !!val);
    } else {
      // non-leaf node
      // children are evaluated
      if (values.has(left) && values.has(right)) {
        if (val === 2) {
          values.set(top, values.get(left) || values.get(right));
        } else {
          values.set(top, values.get(left) && values.get(right));
        }
      } else {
        // add children to the stack
        stack.push(top);
        stack.push(left);
        stack.push(right);
      }
    }
  }

  return values.get(root);
}

const evaluateTreeRecursive = root => {
  if (!root.left && !root.right) {
    return !!root.val;
  }

  if (root.val === 2) {
    return evaluateTreeRecursive(root.left) || evaluateTreeRecursive(root.right);
  }

  return evaluateTreeRecursive(root.left) && evaluateTreeRecursive(root.right);
}