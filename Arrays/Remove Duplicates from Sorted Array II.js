/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let left = 2;

  for (let right = 2; right < nums.length; right++) {
    if (nums[right] !== nums[left - 2]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
}

