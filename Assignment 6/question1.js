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

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
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

function findMinCut(N, ori, sink, mat) {
  const graph = new Graph(N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (mat[i][j] > 0) {
        graph.addEdge(i, j, mat[i][j]);
      }
    }
  }
  return graph.edmondKarpAlgorithm(ori, sink);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", firstLine => {
    let count = 0;
    const mat = [];
    const [N, ori, sink] = firstLine.trim().split(" ").map(Number);
    const askForMatrixInput = () => {
      rl.question("", rowInput => {
        mat.push(rowInput.trim().split(" ").map(Number));
        count += 1;
        if (count < N) {
          askForMatrixInput();
        } else {
          console.log(findMinCut(N, ori, sink, mat));
          rl.close();
        }
      });
    };
    askForMatrixInput();
  });
}

main();
