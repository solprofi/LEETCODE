const isAlphanumeric = str => {
    const charValue = str.charCodeAt(0);

    return (charValue >= 'a'.charCodeAt(0) && charValue <= 'z'.charCodeAt(0)) ||
        (charValue >= '0'.charCodeAt(0) && charValue <= '9'.charCodeAt(0));
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = str => {
    const filteredStr = str
        .toLowerCase()
        .split('')
        .filter(isAlphanumeric)
        .join('');

    let left = 0;
    let right = filteredStr.length - 1;

    while (left <= right) {
        if (filteredStr[left] !== filteredStr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// without extra memory
const isPalindrome2 = str => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(str[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(str[right])) {
            right--;
        }

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}