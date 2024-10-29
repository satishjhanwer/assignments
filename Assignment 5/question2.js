const readline = require("readline");

function maxProduct(N) {
  if (N < 2) return 0;
  const dp = new Array(N + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= N; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[N];
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("", n => {
    const result = maxProduct(parseInt(n));
    console.log(result);
    rl.close();
  });
}

main();
