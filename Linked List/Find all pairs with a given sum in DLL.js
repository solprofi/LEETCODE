const findTail = head => {
  let tail = head;

  while (tail.next) {
    tail = tail.next;
  }

  return tail;
}

const findPairs = (head, target) => {
  const res = [];

  let left = head;
  let right = findTail(head);

  while(left.val < right.val) {
    const sum = left.val + right.val;

    if (sum === target) {
      res.push([left.val, right.val]);
      left = left.next;
      right = right.prev;
    } else if (sum < target) {
      left = left.next;
    } else {
      right = right.prev;
    }
  }

  return res;
}