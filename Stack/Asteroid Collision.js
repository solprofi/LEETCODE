/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = asteroids => {
  const stack = [];

  for (const a of asteroids) {
    let shouldAppend = true;

    while(stack.length && stack[stack.length - 1] > 0 && a < 0) {
      const diff = stack[stack.length - 1] + a;

      if (diff > 0) {
        shouldAppend = false;
        break;
      } else if (diff === 0) {
        stack.pop();
        shouldAppend = false;
        break;
      } else {
        stack.pop();
      }
    }

    if (shouldAppend) {
      stack.push(a);
    }
  }

  return stack;
}