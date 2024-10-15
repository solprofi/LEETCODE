/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!charMap[s[i]]) {
            charMap[s[i]] = 0;
        }

        if (!charMap[t[i]]) {
            charMap[t[i]] = 0;
        }

        charMap[s[i]]++;
        charMap[t[i]]--;
    }

    for (value of Object.values(charMap)) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
};