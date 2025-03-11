/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = input => {
  // [[1,2],[2,4],[3,2],[4,1]]
  // [enqueueTime, processingTime]

  // input may not be sorted, sort the input to enqueue tasks in getOrder
  // store the original index in tasks for correct result

  // when tasks are enqueued, pick the task with min processing time
  // if processing time equal, pick by smaller index
  // use minHeap

  // at certain time, enqueue all the tasks with this time
  // pick task with smallest processing time
  // if nothing to pick, move to next point of time, where task is available

  // [enqueueTime, processingTime, originalIndex]
  const tasks = input.map((task, index) => [...task, index]);
  // sort by enqueueTime
  tasks.sort((a,b) => a[0] - b[0]);

  const availableTasks = new PriorityQueue((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    return a[2] - b[2];
  });

  const taskProcessingOrder = [];
  let i = 0;
  let time = tasks[0][0];

  while (i < tasks.length || !availableTasks.isEmpty()) {
    while (i < tasks.length && time >= tasks[i][0]) {
      availableTasks.enqueue(tasks[i]);
      i++;
    }

    if (availableTasks.isEmpty()) {
      time = tasks[i][0];
    } else {
      const task = availableTasks.dequeue();
      taskProcessingOrder.push(task[2]);
      time += task[1];
    }
  }

  return taskProcessingOrder;
};