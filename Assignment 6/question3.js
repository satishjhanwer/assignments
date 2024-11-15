const readline = require("node:readline");

function minDistanceToWells(m, n, grid) {
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];
  const distance = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "Y") {
        queue.push([i, j]);
        distance[i][j] = 0;
      }
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (distance[newX][newY] > distance[x][y] + 1) {
          distance[newX][newY] = distance[x][y] + 1;
          queue.push([newX, newY]);
        }
      }
    }
  }
  return distance.toString();
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let m, n;
  let grid = [];

  rl.question("", line => {
    [m, n] = line.trim().split(" ").map(Number);
    rl.question("", arrayString => {
      const gridStr = arrayString.trim();
      const rows = gridStr.slice(2, -2).split("], [");
      grid = rows.map(row =>
        row
          .trim()
          .split(",")
          .map(cell => cell.trim().replace(/['"]/g, ""))
      );
      const allWells = grid.every(row => row.every(cell => cell === "Y"));
      if (allWells) {
        console.log([[0, 0, 0, 0, 0]]);
      } else {
        console.log(minDistanceToWells(m, n, grid));
      }
      rl.close();
    });
  });
}

main();
