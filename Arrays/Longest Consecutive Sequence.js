/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
    const set = new Set(nums);
    let longestSeq = 0;

    for (let value of set) {
        if (!set.has(value - 1)) {
            let currSeqLength = 1;

            while (set.has(value + currSeqLength)) {
                currSeqLength++;
            }

            longestSeq = Math.max(longestSeq, currSeqLength);
        }
    }

    return longestSeq;
};