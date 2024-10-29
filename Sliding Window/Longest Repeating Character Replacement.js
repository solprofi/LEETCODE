/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    const charMap = {};
    let result = 0;
    let left = 0;
    let maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        if (charMap[s[right]]) {
            charMap[s[right]]++;
        } else {
            charMap[s[right]] = 1;
        }

        maxFreq = Math.max(maxFreq, charMap[s[right]]);

        const currWindowLength = right - left + 1;

        if (currWindowLength - maxFreq <= k) {
            result = Math.max(result, right - left + 1);
        } else {
            charMap[s[left]]--;
            left++;
        }

    }

    return result;
};