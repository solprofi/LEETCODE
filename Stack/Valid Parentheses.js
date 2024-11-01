/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    const stack = [];
    const bracketsMap = {
        "]": "[",
        ")": "(",
        "}": "{"
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (bracketsMap[char] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}