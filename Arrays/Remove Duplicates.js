/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let left = 1;

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] != nums[right-1]) {
            nums[right] = nums[left];
            left++;
        }
    }

    return left;
};