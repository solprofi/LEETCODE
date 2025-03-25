/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
  // neighbor elements are never the same
  // utilize a BS
  // if mid is a local max, return it
  // else pick a greater number and move search space towards it

  // since edge elements are always greater than nums[-1] and nums[nums.length]
  // correspondingly, by moving towards the greater element we'll always reach a local max

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    const leftNeighbor = nums[mid - 1] ?? Number.NEGATIVE_INFINITY;
    const rightNeighbor = nums[mid + 1] ?? Number.NEGATIVE_INFINITY;

    if (nums[mid] > leftNeighbor && nums[mid] > rightNeighbor) {
      return mid;
    }

    if (nums[mid + 1] > nums[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}