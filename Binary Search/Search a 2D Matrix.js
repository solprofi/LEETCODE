/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let top = 0;
    let bot = rows - 1;
    let row;

    while (top <= bot) {
        row = Math.floor((top + bot) / 2);

        if (matrix[row][cols - 1] < target) {
            top = row + 1;
        } else if (matrix[row][0] > target) {
            bot = row - 1;
        } else {
            break;
        }
    }

    if (top > bot) {
        return false;
    }

    let left = 0;
    let right = cols - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (matrix[row][mid] > target) {
            right = mid - 1;
        } else if (matrix[row][mid] < target) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
}