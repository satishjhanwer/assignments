const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = 0;
let currentTest = 0;
let N = 0,
  M = 0;
let edges = [];
let state = "INIT";
let results = [];

const processTestCase = (N, M, edges) => {
  const adjList = Array.from({ length: N + 1 }, () => []);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const visited = Array(N + 1).fill(false);
  let numComponents = 0;

  const dfs = node => {
    const stack = [node];
    visited[node] = true;
    while (stack.length) {
      const current = stack.pop();
      for (const neighbor of adjList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      numComponents++;
    }
  }

  if (M < N - 1) {
    return -1;
  } else {
    return numComponents - 1;
  }
};

rl.on("line", line => {
  if (state === "INIT") {
    T = parseInt(line.trim());
    state = "READ_TEST_CASE";
  } else if (state === "READ_TEST_CASE") {
    [N, M] = line.trim().split(" ").map(Number);
    edges = [];
    if (M === 0) {
      results.push(N === 1 ? 0 : -1);
      currentTest++;
      if (currentTest === T) {
        console.log(results.join("\n"));
        rl.close();
      }
    } else {
      state = "READ_EDGES";
    }
  } else if (state === "READ_EDGES") {
    const [u, v] = line.trim().split(" ").map(Number);
    edges.push([u, v]);
    if (edges.length === M) {
      const result = processTestCase(N, M, edges);
      results.push(result);
      currentTest++;
      if (currentTest === T) {
        console.log(results.join("\n"));
        rl.close();
      } else {
        state = "READ_TEST_CASE";
      }
    }
  }
});
