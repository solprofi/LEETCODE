// Using stack:
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
    const stack = [];
    const carData = position.map((position, index) => ({
        position,
        speed: speed[index]
    }));
    carData.sort((a,b) => b.position - a.position);

    for (let {position, speed} of carData) {
        const arrivalTime = (target - position) / speed;
        stack.push(arrivalTime);

        if (stack.length >= 2 && stack[stack.length - 1] < stack[stack.length - 2]) {
            stack.pop();
        }
    }

    return stack.length;
}

// Using slowest time:
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet2 = (target, position, speed) => {
    const carData = position.map((position, index) => ({
        position,
        speed: speed[index]
    }));
    carData.sort((a,b) => b.position - a.position);

    let currTime = 0;
    let fleetCount = 0;

    for (let {position, speed} of carData) {
        const arrivalTime = (target - position) / speed;

        if (currTime < arrivalTime) {
            fleetCount++;
            currTime = arrivalTime;
        }
    }

    return fleetCount;
}