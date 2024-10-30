/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let left = 0;
    let right = 0;
    let vowCount = 0;

    while (right < k) {
        vowCount += vowels.has(s[right]);
        right++;
    }

    let res = vowCount;

    while (right < s.length) {
        vowCount = vowCount + vowels.has(s[right]) - vowels.has(s[left]);
        res = Math.max(res, vowCount);

        left++;
        right++;
    }

    return res;
}