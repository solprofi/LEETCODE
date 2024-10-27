/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = str => {
    let charSet = new Set();
    let left = 0;
    let result = 0;

    for (let right = 0; right < str.length; right++) {
        while(charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }

        result = Math.max(result, right - left + 1);
        charSet.add(str[right]);
    }

    return result;
};