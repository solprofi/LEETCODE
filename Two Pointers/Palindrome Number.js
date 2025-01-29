/**
 * @param {number} x
 * @return {boolean}
 */
// Using a string conversion
const isPalindrome = x => {
  if (x < 0) {
    return false;
  }

  const str = x.toString();

  let left = 0;
  let right = str.length - 1;

  while(left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Follow-up without string conversion
const isPalindrome2 = x => {
  if (x < 0) {
    return false;
  }

  let divider = 0;
  while (x >= divider * 10) {
    divider *= 10;
  }

  let temp = x;

  while (temp) {
    const left = Math.floor(temp / divider);
    const right = temp % 10;

    if (left !== right) {
      return false;
    }

    temp = Math.floor((temp % divider) / 10);
    divider /= 100;
  }

  return true;
}


// compare reverted halves
const isPalindrome3 = x => {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let revertedHalf = 0;
  while(revertedHalf < x) {
    revertedHalf = revertedHalf * 10 + x % 10;
    x = Math.floor(x / 10);
  }
}