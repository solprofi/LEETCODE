/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = n => {
    let left = 0;
    let right = n;
    let res = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const coins = mid / 2 * (mid + 1);

        if (coins > n) {
            right = mid - 1;
        } else {
            left  = mid + 1;
            res = Math.max(res, mid);
        }
    }

    return res;
}