/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
    let alt = 0;
    let maxAlt = 0;

    for (let value of gain) {
        alt += value;
        maxAlt = Math.max(alt, maxAlt);
    }

    return maxAlt;
}