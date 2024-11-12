/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let res = nums[0];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        res = Math.min(res, nums[mid]);

        if (nums[left] < nums[right]) {
            return Math.min(res, nums[left]);
        }

        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

// Simpler version
const findMin2 = nums => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

