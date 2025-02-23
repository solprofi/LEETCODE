/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let currSum = 0;
  let minLen = Number.MAX_SAFE_INTEGER;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    currSum += nums[right];

    while (currSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currSum -= nums[left];
      left++;
    }

    right++;
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}