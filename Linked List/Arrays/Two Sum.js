/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const complementMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in complementMap) {
            return [i, complementMap[nums[i]]];
        } else {
            complementMap[target - nums[i]] = i;
        }
    }
};