const readline = require("readline");

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Graph {
  constructor(vert) {
    this.vert = vert;
    this.lim = Array.from({ length: vert }, () => Array(vert).fill(0));
  }

  addEdge(ori, dest, w) {
    this.lim[ori][dest] += w;
  }

  bfs(ori, sink, parent) {
    const visited = Array(this.vert).fill(false);
    const queue = new Queue();
    queue.enqueue(ori);
    visited[ori] = true;
    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      for (let v = 0; v < this.vert; v++) {
        if (!visited[v] && this.lim[u][v] > 0) {
          queue.enqueue(v);
          visited[v] = true;
          parent[v] = u;
          if (v === sink) {
            return true;
          }
        }
      }
    }
    return false;
  }

  edmondKarpAlgorithm(ori, sink) {
    const parent = Array(this.vert).fill(-1);
    let maxFlow = 0;
    while (this.bfs(ori, sink, parent)) {
      let pathFlow = Infinity;
      let v = sink;
      while (v !== ori) {
        const u = parent[v];
        pathFlow = Math.min(pathFlow, this.lim[u][v]);
        v = parent[v];
      }
      v = sink;
      while (v !== ori) {
        const u = parent[v];
        this.lim[u][v] -= pathFlow;
        this.lim[v][u] += pathFlow;
        v = parent[v];
      }
      maxFlow += pathFlow;
    }
    return maxFlow;
  }
}

function findMaxFlow(N, M, pipes) {
  const graph = new Graph(N);
  pipes.forEach(([from, to, capacity]) => {
    graph.addEdge(from - 1, to - 1, capacity);
    graph.addEdge(to - 1, from - 1, capacity);
  });
  return graph.edmondKarpAlgorithm(0, N - 1);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let T = 0;
  let currentTest = 0;
  let N = 0,
    M = 0;
  let pipes = [];
  let state = "INIT";
  let results = [];

  rl.on("line", line => {
    if (state === "INIT") {
      T = parseInt(line.trim());
      state = "READ_TEST_CASE";
    } else if (state === "READ_TEST_CASE") {
      [N, M] = line.trim().split(" ").map(Number);
      pipes = [];
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
      const [from, to, capacity] = line.trim().split(" ").map(Number);
      pipes.push([from, to, capacity]);
      if (pipes.length === M) {
        const maxFlow = findMaxFlow(N, M, pipes);
        results.push(maxFlow);
        currentTest++;
        if (currentTest === T) {
          rl.close();
        } else {
          state = "READ_TEST_CASE";
        }
      }
    }
  });

  rl.on("close", () => {
    console.log(results.join("\n"));
  });
}

main();
