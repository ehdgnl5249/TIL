const visited: Array<number> = Array.from(
  { 
    length: 9 
  }, 
  () => 0
);

const graph: Array<Array<number>> = [
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

const dfs = (
  graph: Array<Array<number>>, 
  v: number, 
  visited: Array<number>
) => {
  visited[v] = 1;
  process.stdout.write(`${v} `);
  
  graph[v].filter((el: number) => {
    if (!visited[el]) dfs(graph, el, visited);
  });
};

dfs(graph, 1, visited);