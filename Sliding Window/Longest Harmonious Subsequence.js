/**
 * @param {number[]} nums
 * @return {number}
 */
// Sliding window
const findLHS = nums => {
    nums.sort((a,b) => a - b);

    let left = 0;
    let res = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] - nums[left] > 1) {
            left++;
        } else if (nums[right] - nums[left] === 1 && right !== left) {
            res = Math.max(res, right - left);
        }
    }

    return res;
}

// hashmap solution
const findLHS = nums => {
    const map = {};

    for (let value of nums) {
        if (map[value]) {
            map[value]++;
        } else {
            map[value] = 1;
        }
    }

    let res = 0;

    for (let [key, value] of Object.entries(map)) {
        if (map[+key + 1]) {
            res = Math.max(res, value + map[+key + 1]);
        }
    }

    return res;
}