/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  // keep track of max index that can be reached
  // traverse the array, select max between current maxIndex and max index
  // that can be reached from the current index
  // if at any point of time current index > maxIndex, it means that we can't
  // reach current index from any of the previous, so immediately return false

  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) {
      return false;
    }

    //optimize for early exit
    if (maxIndex >= nums.length - 1) {
      return true;
    }

    maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  return true;
}

const canJump2 = nums => {
  // go from the other side
  // initially we want to reach the last index of nums array, which is our goal
  // check for index to the left of the goal
  // if goal can be reached from current index, move goal to curr index
  // in the end if goal === 0, it can be reached from the start

  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}

// backtracking solution
const canJump3 = nums => {
  // for each index consider if end can be reached from it
  // define canReachEnd(index)
  // BC: index === nums.length => end is reachable, return true
  // explore all possible distances that can be reached from current index

  const canReachEnd = index => {
    if (index >= nums.length - 1) {
      return true;
    }

    const furthestJump = index + nums[index];

    for (let nextPosition = index + 1; nextPosition <= furthestJump; nextPosition++) {
      return canReachEnd(nextPosition);
    }

    return false;
  }

  return canReachEnd(0);
}