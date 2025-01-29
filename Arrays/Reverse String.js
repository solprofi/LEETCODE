/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// In-place
const reverseString = s => {
  const length = s.length;

  for (let i = 0; i < Math.floor(length); i++) {
    [s[i], s[length - 1 - i]] = [s[length - 1 - i], s[i]];
  }
}

// Two pointers
const reverseString2 = s => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
}

// Recursive
const reverseString3 = s => {
  const reverse = (str, left, right) => {
    if (left >= right) {
      return;
    }

    [s[left], s[right]] = [s[right], s[left]];

    reverse(str, left + 1, right - 1);
  }

  reverse(s, 0, s.length - 1);
}