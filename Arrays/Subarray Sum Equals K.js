/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const prefixSumMap = { 0: 1};

  let currSum = 0;
  let subarrCount = 0;

  for (const num of nums) {
    currSum += num;

    if (currSum - k in prefixSumMap) {
      subarrCount += prefixSumMap[currSum - k];
    }

    prefixSumMap[currSum] = (prefixSumMap[currSum] || 0) + 1;
  }

  return subarrCount;
}