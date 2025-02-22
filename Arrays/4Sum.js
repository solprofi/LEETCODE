const twoSum = (start, nums, target, currentQuadruplets, result) => {
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      result.push([...currentQuadruplets, nums[left], nums[right]]);
      left++;

      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
    }
  }
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (input, target) => {
  // sort array to make work with duplicates easier
  const nums = [...input].sort((a, b) => a - b);
  // init currentQuadruplets and result arrays
  const currentQuadruplets = [];
  const result = [];

  // recursive kSum function
  const kSum = (start, k, target) => {
    if (k !== 2) {
      // traverse until k - 1 elements are left in the arr
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i !== start && nums[i] === nums[i - 1]) {
          continue;
        }

        currentQuadruplets.push(nums[i]);
        kSum(i + 1, k - 1, target - nums[i]);
        currentQuadruplets.pop();
      }

      return;
    }

    twoSum(start, nums, target, currentQuadruplets, result);
  }

  kSum(0, 4, target);

  return result;
};