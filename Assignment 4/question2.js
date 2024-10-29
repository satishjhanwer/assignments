const readline = require("readline");

function findLowestCost(n, trains, source, destination, maxStops) {
  const graph = Array.from({ length: n }, () => []);

  for (const [fromCity, toCity, cost] of trains) {
    graph[fromCity].push({ city: toCity, cost: cost });
    graph[toCity].push({ city: fromCity, cost: cost });
  }

  const pq = [];
  pq.push([0, source, 0, [source]]);

  let minCost = Infinity;
  let bestPath = null;

  while (pq.length > 0) {
    const [cost, currentCity, stops, path] = pq.shift();
    if (currentCity === destination) {
      if (cost < minCost) {
        minCost = cost;
        bestPath = path;
      }
      continue;
    }
    if (stops > maxStops) {
      continue;
    }
    for (const neighbor of graph[currentCity]) {
      const newCost = cost + neighbor.cost;
      pq.push([newCost, neighbor.city, stops + 1, [...path, neighbor.city]]);
    }
    pq.sort((a, b) => a[0] - b[0]);
  }

  return minCost === Infinity ? -1 : minCost;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let numberOfCities,
    sourceCity,
    destinationCity,
    maxStops,
    trains = [];

  rl.question("", n => {
    numberOfCities = parseInt(n);
    rl.question("", trainStr => {
      trains = JSON.parse(trainStr);
      rl.question("", start => {
        sourceCity = parseInt(start);
        rl.question("", destination => {
          destinationCity = parseInt(destination);
          rl.question("", maxStop => {
            maxStops = parseInt(maxStop);
            const result = findLowestCost(numberOfCities, trains, sourceCity, destinationCity, maxStops);
            console.log(result);
            rl.close();
          });
        });
      });
    });
  });
}

main();
