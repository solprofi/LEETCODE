/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (t, s) => {
  // check if t is a subsequence of s
  // t is subsequence of s, means that any number of characters can be removed from s
  // to receive t

  // use two index pointers
  // traverse s, while checking if t[tPtr] === s[sPtr]
  // -- if equal, move both
  // -- else move only s pointer

  let tPtr = 0;

  for (let sPtr = 0; sPtr < s.length; sPtr++) {
    if (t[tPtr] === s[sPtr]) {
      tPtr++;
    }
  }

  return tPtr === t.length;
}