/**
 * @param {string[]} strs
 * @return {string}
 */
// Vertical scan
const longestCommonPrefix = strs => {
  let res = [];

  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs) {
      if (str.length === i || str[i] !== strs[0][i]) {
        return res;
      }
    }

    res += strs[0][i];
  }

  return res;
};

// Horizontal scan
const longestCommonPrefix2 = nums => {
  let prefix = nums[0];

  if (!prefix) {
    return "";
  }

  for (let i = 1; i < nums.length; i++) {
    while (!nums[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (!prefix) {
        return "";
      }
    }
  }

  return prefix;
}