/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = n => {
  // the same way as any number can be represented with powers of 2 (binary)
  // it can be represented with base 3

  // get the remainder of mod 3, then divide by 3
  // if at any point remainder is greater than 2
  // we have to use some power twice

  while (n > 0) {
    if (n % 3 === 2) {
      return false;
    }

    n = Math.floor(n / 3);
  }

  return true;
}