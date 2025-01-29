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