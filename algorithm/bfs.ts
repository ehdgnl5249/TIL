const bfs = (
  graph: Array<Array<number>>, 
  v: number, 
  visited: Array<number>
) => {
  const queue: Array<number> = [v];
  visited[v] = 1;

  while (queue.length > 0) {
    v = queue.shift();
    process.stdout.write(`${v} `);

    for (const i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = 1;
      }
    }
  }
};

const bfs_visited: Array<number> = Array.from({ length: 9 }, () => 0);
const bfs_graph: Array<Array<number>> = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
];

bfs(bfs_graph, 1, bfs_visited);