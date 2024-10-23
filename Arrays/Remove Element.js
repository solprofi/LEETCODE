/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[left] = nums[i];
            left++;
        }
    }

    return left;
};