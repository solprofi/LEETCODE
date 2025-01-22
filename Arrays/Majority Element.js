/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const map = {};

  let maxCount = 0;
  let result;

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > maxCount) {
      result = num;
      maxCount = map[num];
    }
  }
}

// utilizing the task description
const majorityElement2 = nums => {
  const map = {};

  for (const value of nums) {
    map[value] = (map[value] || 0) + 1;

    if (map[value] > nums.length / 2) {
      return value;
    }
  }
}

// Boyer-Moore majority algorithm
const majorityElement2 = nums => {
  let candidate;
  let count = 0;

  for (const value of nums) {
    if (count === 0) {
      candidate = value;
    }

    count += candidate === value ? 1 : -1;
  }

  return candidate;
}