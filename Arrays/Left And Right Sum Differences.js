/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = nums => {
    let rightSum = 0;
    let leftSum = 0;
    let res = [];

    for (let value of nums) {
        rightSum += value;
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];

        res[i] = Math.abs(leftSum - rightSum);

        leftSum += nums[i];
    }

    return res;
}