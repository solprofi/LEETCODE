// O(n^2) time, O(1) space.
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
    let total = 0;

    for (let i = 0; i < height.length; i++) {
        let left = 0;
        let right = height.length - 1;

        let maxLeft = 0;
        let maxRight = 0;

        while (left < i) {
            maxLeft = Math.max(maxLeft, height[left]);
            left++;
        }

        while (right > i) {
            maxRight = Math.max(maxRight, height[right]);
            right--;
        }

        const water = Math.min(maxLeft, maxRight) - height[i];
        total += Math.max(water, 0);
    }

    return total;
};

// O(N) Time, O(N) space
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
    let total = 0;

    let maxHeightLeft = [];
    let maxHeightRight = [];
    let currHeightLeft = 0;
    let currHeightRight = 0;

    for (let i = 0; i < height.length; i++) {
        maxHeightLeft[i] = currHeightLeft;
        currHeightLeft = Math.max(currHeightLeft, height[i]);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        maxHeightRight[i] = currHeightRight;
        currHeightRight = Math.max(currHeightRight, height[i]);
    }

    for (let i = 0; i < height.length; i++) {
        const waterCol = Math.min(maxHeightLeft[i], maxHeightRight[i]) - height[i];
        total += Math.max(0, waterCol);
    }

    return total;
};

// O(N) Time, O(1) Space
/**
 * @param {number[]} height
 * @return {number}
 */
const trap3 = height => {
    let left = 0;
    let right = height.length - 1;
    let total = 0;
    let leftMax = height[left];
    let rightMax = height[right];

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            total += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            total += rightMax - height[right];
        }
    }

    return total;
};