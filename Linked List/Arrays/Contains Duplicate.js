/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    const uniqueNums = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (uniqueNums.has(nums[i])) {
            return true;
        } else {
            uniqueNums.add(nums[i]);
        }
    }

    return false;
};