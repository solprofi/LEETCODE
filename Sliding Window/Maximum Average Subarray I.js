/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let left = 0;
    let right = 0;
    let currSum = 0;

    while (right < k) {
        currSum += nums[right];
        right++;
    }

    let maxAvg = currSum / k;

    while (right < nums.length) {
        currSum = currSum - nums[left] + nums[right];
        maxAvg = Math.max(maxAvg, currSum / k);

        left++;
        right++;
    }

    return maxAvg;
}