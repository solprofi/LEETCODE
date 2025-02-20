/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const stack = [];

  for (const c of s) {
    if (c !== ']') {
      stack.push(c);
    } else {
      let substr = '';

      while (stack[stack.length - 1] !== '[') {
        substr = stack.pop() + substr;
      }
      stack.pop();

      let num = '';
      while (!isNaN(stack[stack.length - 1]) && stack.length) {
        num = stack.pop() + num;
      }

      stack.push(substr.repeat(Number(num)));
    }
  }

  return stack.join('');
}