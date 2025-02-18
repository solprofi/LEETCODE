/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
  // Find the shortest subarray with the same degree as nums
  // Save first occurrence of the element
  // Keep track of max frequency - degree
  // When new max frequency found - update the result
  // else If frequency === max frequency, check whether this subarray is smaller

  const firstOccurrence = {};
  const frequencyCount = {};

  let res = 0;
  let degree = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!(num in firstOccurrence)) {
      firstOccurrence[num] = i;
    }

    frequencyCount[num] = (frequencyCount[num] || 0) + 1;

    if (frequencyCount[num] > degree) {
      degree = frequencyCount[num];
      res = i - firstOccurrence[num] + 1;
    } else if (frequencyCount[num] === degree) {
      res = Math.min(res, i - firstOccurrence[num] + 1);
    }
  }

  return res;
}