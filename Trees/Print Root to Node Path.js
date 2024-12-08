const getPath = (arr, root, target) => {
  if (!root) {
    return false;
  }

  arr.push(root.val);

  if (root.val === target) {
    return true;
  }

  if (getPath(arr, root.left, target) || getPath(arr, root.right, target)) {
    return true;
  }

  arr.pop();

  return false;
}

const rootToNode = (root, nodeValue) => {
  const result = [];

  getPath(result, root, nodeValue);

  return result;
}


