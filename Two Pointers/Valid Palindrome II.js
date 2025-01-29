const isPalindrome = (s, start, end) => {
  let left = start;
  let right = end;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
  let left = 0;
  let right = s.length - 1;

   while(left < right) {
     if (s[left] !== s[right]) {
       return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
     }
   }

   return true;
}




// support K mismatches
const isValidKPalindrome = (str, start, end, mismatchCount) => {
  let left = start;
  let right = end;

  while (left < right) {
    if (str[left] !== str[right]) {
      if (mismatchCount === 0) {
        return false;
      }

      return isValidKPalindrome(str, left + 1, right, mismatchCount - 1) ||
        isValidKPalindrome(str, left, right - 1, mismatchCount - 1)
    }

    left++;
    right--;
  }
}

const isValidPalindrome = (s, k) => {
  return isValidKPalindrome(s, 0, s.length - 1, k);
}