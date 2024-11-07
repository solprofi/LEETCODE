/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
    let left = 1;
    let right = Math.max(...piles);
    let res = right;

    while (left <= right) {
        const speed = Math.floor(left + (right - left) / 2);

        let hours = 0;
        for (let value of piles) {
            hours += Math.ceil(value / speed);
        }

        if (hours <= h) {
            res = Math.min(res, speed);
            right = speed - 1;
        } else {
            left = speed + 1;
        }
    }

    return res;
}