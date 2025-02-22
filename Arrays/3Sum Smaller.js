/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumSmaller = (input, target) => {
  // we want to return all triplets count without checking for duplicates
  let tripletsCount = 0;

  const nums = [...input].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum >= target) {
        right--;
      } else {
        // when sum is less than target than summing all other pairs
        // between left and right will be smaller than target,
        // since nums is sorted (it's like we moved right pointer to the left)
        tripletsCount += right - left;
        left++;
      }
    }
  }

  return tripletsCount;
}