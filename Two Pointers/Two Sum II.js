/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    let sum = numbers[left] + numbers[right];

    while (sum !== target) {
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        }

        sum = numbers[left] + numbers[right];
    }

    return [left + 1, right + 1];
}