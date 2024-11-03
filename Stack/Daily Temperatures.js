/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temps => {
    const res = Array(temps.length).fill(0);
    const stack = [];

    for (let i = 0; i < temps.length; i++) {
        while(stack.length && temps[i] > stack[stack.length - 1][1]) {
            const [dayIndex] = stack.pop();
            res[dayIndex] = i = dayIndex;
        }

        stack.push([i, temps[i]]);
    }

    return res;
}