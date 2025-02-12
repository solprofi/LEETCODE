// recursive
const postorderTraversal = root => {
  const result = [];

  const dfs = node => {
    if (!node) {
      return;
    }

    dfs(node.left);
    dfs(node.right);

    result.push(node.val);
  }

  dfs(root);

  return result;
}

//two stacks
const postOrder2Stacks = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    const curr = stack1.pop();
    stack2.push(curr);

    if (curr.left) {
      stack1.push(curr.left);
    }

    if (curr.right) {
      stack1.push(curr.right);
    }
  }

  while (stack2.length) {
    const curr = stack2.pop();
    result.push(curr.val);
  }

  return result;
}

//iterative with one stack
const postOrder1Stack = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let temp = stack[stack.length - 1].right;

    if (temp) {
      curr = temp;
    } else {
      temp = stack.pop();
      result.push(temp.val);

      while (stack.length && temp === stack[stack.length - 1].right) {
        temp = stack.pop();
        result.push(temp.val);
      }
    }
  }

  return result;
}

const reversePath = (start, end) => {
  if (start === end) {
    return;
  }

  let prev = start;
  let curr = start.right;

  while (prev !== end) {
    let next = curr.right;
    curr.right = prev;
    prev = curr;
    curr = next;
  }
}

const collectReversedPath = (start, end, res) => {
  reversePath(start, end);

  let temp = end;

  while (true) {
    res.push(temp.val);

    if (temp === start) {
      break;
    }

    temp = temp.right;
  }

  reversePath(end, start);
}

const findPredecessor = node => {
  let temp = node.left;

  while (temp.right && temp.right !== node) {
    temp = temp.right;
  }

  return temp;
}

const postorderMorris = root => {
  if (!root) {
    return [];
  }

  const res = [];

  const dummy = new TreeNode(null, root);
  let curr = dummy;

  while (curr) {
    if (!curr.left) {
      curr = curr.right;
    } else {
      const pred = findPredecessor(curr);

      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;
        collectReversedPath(curr.left, pred, res);
        curr = curr.right;
      }
    }
  }

  return res;
}