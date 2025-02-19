/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// O(N*MlogM) time
const groupAnagrams = strs => {
  // create HM
  const map = {};
  // sort strings in a separate array
  const sortedStrs = strs.map(str => str.split('').sort().join(''));
  // store sorted string val as key, array of strings as value
  for (let i = 0; i < sortedStrs.length; i++) {
    if (!(sortedStrs[i] in map)) {
      map[sortedStrs[i]] = [strs[i]];
    } else {
      map[sortedStrs[i]].push(strs[i]);
    }
  }

  // return HM values
  return Object.values(map);
};

// get charecter count array (length 26), where each index
// is corresponding letter frequency
const getStringKey = str => {
  const frequencyArray = Array.from({length: 26}, () => 0);

  for (let i = 0; i < str.length; i++) {
    const charIndex = str.charCodeAt(i) - 97;
    frequencyArray[charIndex]++;
  }

  // transform count array to string with delimiters, use it as key
  return frequencyArray.join('#');
}

// O(N*M) time
const groupAnagrams2 = strs => {
  // create HM
  // value is str array, key is character count string with delimiters
  const map = {};
  // traverse array,
  for (const str of strs) {
    const strKey = getStringKey(str);

    if (strKey in map) {
      // if key in map, push to corresponding array
      map[strKey].push(str);
    } else {
      // if no key in map, add it
      map[strKey] = [str];
    }
  }

  return Object.values(map);
};