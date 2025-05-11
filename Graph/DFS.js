const adjList = [
  [],
  [2,3],
  [1,5,6],
  [1,7,4],
  [3,8],
  [2],
  [2],
  [3,8],
  [4,7],
]

const dfs = (node, visited, result) => {
  visited[node] = 1;
  result.push(node);

  adjList[node].forEach(vertex => {
    if (!visited[vertex]) {
      dfs(vertex, visited, result);
    }
  });
}

const traversal = (nodeCount) => {
  const result = [];

  const visited = new Array(nodeCount).fill(0);

  dfs(1, visited, result);

  return result;
}

console.log(traversal(8))