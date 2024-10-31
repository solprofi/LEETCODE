const areMapsEqual = (map1, map2) => {
    for (let [key, value] of Object.entries(map1)) {
        if (map2[key] !== value) {
            return false;
        }
    }

    return true;
}

// Time complexity: O(26*n)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    const s1Map = {};
    const substrMap = {};

    let left = 0;
    let right = 0;

    while (right < s1.length) {
        s1Map[s1[right]] = (s1Map[s1[right]] || 0) + 1;
        substrMap[s2[right]] = (substrMap[s2[right]] || 0) + 1;

        right++;
    }

    while (right < s2.length) {
        if (areMapsEqual(s1Map, substrMap)) {
            return true;
        }

        substrMap[s2[right]] = (substrMap[s2[right]] || 0) + 1;
        substrMap[s2[left]]--;

        left++;
        right++;
    }

    return areMapsEqual(s1Map, substrMap);
}