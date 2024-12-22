const isLeaf = root => !root.left && !root.right;

const addLeftBoundary = (root, result) => {
  let curr = root;

  while (curr) {
    if (isLeaf(curr)) {
      return;
    }

    result.push(curr.val);

    if (curr.left) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}

const addRightBoundary = (root, result) => {
  const stack = [];
  let curr = root;

  while (curr) {
    if (isLeaf(curr)) {
      break;
    }

    stack.push(curr.val);

    if (curr.right) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }
}

const addLeaves = (root, result) => {
  if (isLeaf(root)) {
    result.push(root.val);
    return;
  }

  if (root.left) {
    addLeaves(root.left, result);
  }

  if (root.right) {
    addLeaves(root.right, result);
  }
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
const boundaryOfBinaryTree = root => {
  const result = [];

  if (!isLeaf(root)) {
    result.push(root.val);
  }

  addLeftBoundary(root.left);
  addLeaves(root);
  addRightBoundary(root.right);

  return result;
}