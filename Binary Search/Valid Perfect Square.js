/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
    let left = 1;
    let right = num;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square > num) {
            right = mid - 1;
        } else if (square < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};