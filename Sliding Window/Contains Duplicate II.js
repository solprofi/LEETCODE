/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < nums.length; right++) {
        if (right - left > k) {
            charSet.delete(nums[left]);
            left++;
        }

        if (charSet.has(nums[right])) {
            return true;
        }

        charSet.add(nums[right]);
    }

    return false;
}