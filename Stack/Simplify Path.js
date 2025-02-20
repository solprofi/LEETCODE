/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
  const stack = [];

  const splitArr = path.split('/');

  for (const s of splitArr) {
    if (s === '..') {
      stack.pop();
    } else if (s !== '.' && s !== '') {
      stack.push(s);
    }
  }

  return '/' + stack.join('/');
}