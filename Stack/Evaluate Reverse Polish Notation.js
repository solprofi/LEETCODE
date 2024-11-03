const calc = (sign, num2, num1) => {
    if (sign === '+') {
        return num1 + num2;
    } else if (sign === '-') {
        return num1 - num2;
    } else if (sign === '*') {
        return num1 * num2;
    }

    return Math.trunc(num1 / num2);
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
    const stack = [];

    for (let token of tokens) {
        const parsedNum = Number(token);

        if (Number.isInteger(parsedNum)) {
            stack.push(parsedNum);
        } else {
            stack.push(calc(token, stack.pop(), stack.pop()))
        }
    }

    return stack[0];
}