/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// compared to the original problem, nums can have duplicate value
// we can perform BS as in the original, but when num[l] === num[mid]
// we can't know whether we're in the sorted part,
// so search space has to be decreased incrementally
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (target === nums[mid]) {
      return true;
    }

    if (nums[mid] > nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[left]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }

  return false;
}