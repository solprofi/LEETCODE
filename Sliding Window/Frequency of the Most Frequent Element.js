/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = (nums, k) => {
    nums.sort((a,b) => a - b);

    let left = 0;
    let currSum = 0;
    let res = 0;

    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        const windowLength = right - left + 1;
        if (windowLength * nums[right] <= currSum + k) {
            res = Math.max(res, windowLength);
        } else {
            currSum -= nums[left];
            left++;
        }
    }

    return res;
}