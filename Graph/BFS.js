const adjList = [
  [],
  [2,6],
  [1,3,4],
  [2],
  [2,5],
  [4,8],
  [1,7,9],
  [6,8],
  [5,7],
  [6]
];

const bfs = (nodeCount, adjList) => {
  const visited = new Array(nodeCount).fill(0);
  visited[1] = 1;

  // use deque from a package in LC for proper TC
  const queue = [1];

  const result = [];

  while (queue.length) {
    const top = queue.shift();
    result.push(top);

    adjList[top].forEach(node => {
      if (!visited[node]) {
        visited[node] = 1;
        queue.push(node);
      }
    });
  }

  return result;
}

console.log(bfs(9, adjList));