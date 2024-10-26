/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    const res = [];
    const sorted = [...nums.sort((a, b) => a - b)];

    for (let i = 0; i < sorted.length; i++) {
        if (i !== 0 && sorted[i] === sorted[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                while(sorted[left] === sorted[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return res;
};