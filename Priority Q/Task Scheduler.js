/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  // understand how many cycles needed to complete all the tasks
  // intuition:
  // -- same tasks must have at least n spaces between them
  // -- to avoid idle time, counts len > n should be true
  // -- to minimize time schedule most frequent tasks ASAP
  // -- most freq task becomes available after n + 1 ticks

  // count frequencies of each char
  const frequenciesMap = {};
  for (const task of tasks) {
    frequenciesMap[task] = (frequenciesMap[task] || 0) + 1;
  }

  // store frequencies in max heap
  const pq = new MaxPriorityQueue();
  for (const taskFrequency of Object.values(frequenciesMap)) {
    pq.enqueue(taskFrequency);
  }

  // define cycle as n + 1
  const CYCLE_LENGTH = n + 1;
  let time = 0;

  // iterate over heap and schedule tasks in cycles
  while (!pq.isEmpty()) {
    let taskCount = 0;

    // if taskFreq > 1 after completion of cycle, put it back in the heap
    // to track it, use additional arr
    let completedTasksFrequencies = [];

    let cycle = CYCLE_LENGTH;
    while (cycle && !pq.isEmpty()) {
      taskCount++;
      if (pq.front() > 1) {
        completedTasksFrequencies.push(pq.front() - 1);
      }
      pq.pop();
      cycle--;
    }

    //rebuild the heap
    for (const frequency of completedTasksFrequencies) {
      pq.enqueue(frequency);
    }

    // when cycle is complete, add time to result
    time += pq.isEmpty() ? taskCount : CYCLE_LENGTH;
  }

  return  time;
}