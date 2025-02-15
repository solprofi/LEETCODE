/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// O(N) time
const isMajorityElement = (nums, target) => {
  let targetCount = 0;

  for (const num of nums) {
    if (num === target) {
      targetCount++;
    }
  }

  return targetCount > nums.length / 2;
}

const findLowerBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
      index = mid;
    } else {
      left = mid + 1;
    }
  }

  return index;
}

const findUpperBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
      index = mid;
    } else {
      left = mid + 1;
    }
  }

  return index;
}

// Utilize that array is sorted. Make 2 binary searches for O(logN) time
const isMajorityElement2 = (nums, target) => {
  const lowerBound = findLowerBound(nums, target);
  const upperBound = findUpperBound(nums, target);

  return upperBound - lowerBound > nums.length / 2;
}


// Only one binary search pass
const isMajorityElement3 = (nums, target) => {
  const lowerBound = findLowerBound(nums, target);

  return nums[lowerBound + Math.floor(nums.length / 2)] === target;
}

