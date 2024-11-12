const findIndexOfMinValue = nums => {
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

    return left;
}

const binarySearch = (start, end, target, nums) => {
    let left = start;
    let right = end;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const minIndex = findIndexOfMinValue(nums);

    if (target >= nums[minIndex] && target <= nums[nums.length - 1]) {
        return binarySearch(minIndex, nums.length - 1, target, nums);
    } else {
        return binarySearch(0, minIndex, target, nums);
    }
};

// Solution with one pass and discreet if-conditions
const search2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target <= nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}