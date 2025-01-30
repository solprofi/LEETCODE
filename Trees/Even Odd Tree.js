const isEvenOddTree = root => {
  const queue = new Deque([root]);

  let level = 0;

  while (queue.front()) {
    let size = queue.size();
    let isLevelEven = level % 2 === 0;

    let prevLevelValue = isLevelEven ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

    while (size) {
      const {val, left, right} = queue.popFront();

      if ((isLevelEven && (prevLevelValue >= val || val % 2 === 0))
      || (!isLevelEven && (prevLevelValue <= val || val % 2 !== 0))) {
        return false;
      }

      prevLevelValue = val;

      if (left) {
        queue.pushBack(left);
      }

      if (right) {
        queue.pushBack(right);
      }

      size--;
    }

    level++;
  }

  return true;
}