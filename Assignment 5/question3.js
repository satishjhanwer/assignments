const readline = require("readline");

function checkHorizontal(mask, m) {
  return (mask & (mask >> 1)) === 0;
}

function checkDiagonal(mask1, mask2, m) {
  return !((mask1 >> 1) & mask2 || (mask1 << 1) & mask2);
}

function countSeeds(mask) {
  return mask.toString(2).split("1").length - 1;
}

function maxPlots(n, m, grid) {
  const gridMask = grid.map(row => parseInt(row, 2));
  const dp = Array.from({ length: n }, () => Array(1 << m).fill(0));

  for (let mask = 0; mask < 1 << m; mask++) {
    if (checkHorizontal(mask, m) && (mask & gridMask[0]) === mask) {
      dp[0][mask] = countSeeds(mask);
    }
  }

  for (let r = 1; r < n; r++) {
    for (let maskCurr = 0; maskCurr < 1 << m; maskCurr++) {
      if (!checkHorizontal(maskCurr, m) || (maskCurr & gridMask[r]) !== maskCurr) continue;

      for (let maskPrev = 0; maskPrev < 1 << m; maskPrev++) {
        if (dp[r - 1][maskPrev] !== -1 && checkDiagonal(maskCurr, maskPrev, m)) {
          dp[r][maskCurr] = Math.max(dp[r][maskCurr], dp[r - 1][maskPrev] + countSeeds(maskCurr));
        }
      }
    }
  }

  return Math.max(...dp[n - 1]);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n,
    m,
    grid = [];

  rl.question("", point => {
    listOfIntegers = point.split(" ").map(Number);
    n = listOfIntegers[0];
    m = listOfIntegers[1];
    rl.on("line", input => {
      const gd = input.split(" ").map(Number);
      grid.push(gd);
      if (grid.length === n) {
        rl.close();
      }
    });
  });

  rl.on("close", () => {
    const result = maxPlots(n, m, grid);
    console.log(result);
  });
}

main();
