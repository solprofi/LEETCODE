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


const initMap = () => {
    const map = {};

    for (let i = 0; i < 26; i++) {
        const key = String.fromCharCode(97 + i);
        map[key] = 0;
    }

    return map;
}

// O(n) solution
const checkInclusion2 = (s1, s2) => {
    const s1Map = initMap();
    const substrMap = initMap();

    let left = 0;
    let right = 0;
    let matchesCount = 0;

    while (right < s1.length) {
        s1Map[s1[right]]++
        substrMap[s2[right]]++;

        right++;
    }

    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 97);

        if (s1Map[char] === substrMap[char]) {
            matchesCount++;
        }
    }

    while (right < s2.length) {
        if (matchesCount === 26) {
            return true;
        }

        const rightChar = s2[right];
        substrMap[rightChar]++;
        if (substrMap[rightChar] > s1Map[rightChar]) {
            matchesCount--;
        } else if (substrMap[rightChar] === s1Map[rightChar]) {
            matchesCount++;
        }

        const leftChar = s2[left];
        substrMap[leftChar]--;
        if (substrMap[leftChar] < s1Map[leftChar]) {
            matchesCount--;
        } else if (substrMap[leftChar] === s1Map[leftChar]) {
            matchesCount++;
        }

        left++;
        right++;
    }

    return matchesCount === 26;
}