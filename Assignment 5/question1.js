const readline = require("readline");

class Union {
  constructor(size) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    }
    return false;
  }
}

function calculateDistance(x1, y1, z1, x2, y2, z2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(z1 - z2);
}

function minCostToConnectPlanets(planets) {
  const n = planets.length;
  let edges = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = calculateDistance(planets[i][0], planets[i][1], planets[i][2], planets[j][0], planets[j][1], planets[j][2]);
      edges.push([dist, i, j]);
    }
  }

  edges.sort((a, b) => a[0] - b[0]);
  const uf = new Union(n);
  let totalCost = 0;
  let edgesUsed = 0;

  for (const [cost, u, v] of edges) {
    if (uf.union(u, v)) {
      totalCost += cost;
      edgesUsed++;
      if (edgesUsed === n - 1) break;
    }
  }

  return totalCost;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let numberOfPlanets,
    planets = [];

  rl.question("", d => {
    numberOfPlanets = parseInt(d);
    rl.on("line", input => {
      const [x, y, z] = input.split(" ").map(Number);
      planets.push([x, y, z]);
      if (planets.length === numberOfPlanets) {
        rl.close();
      }
    });
  });

  rl.on("close", () => {
    const result = minCostToConnectPlanets(planets);
    console.log(result);
  });
}

main();
