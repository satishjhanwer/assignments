const readline = require('node:readline');

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element <= parent) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function minStopsToReachDestination(distance, initialDust, wells) {
  let currentPosition = 0;
  let dust = initialDust;
  let stops = 0;
  const maxHeap = new MaxHeap();

  wells.push([distance, 0]);

  for (const element of wells) {
    let [wellPosition, fairyDust] = element;
    let distanceToNextWell = wellPosition - currentPosition;
    while (dust < distanceToNextWell) {
      if (maxHeap.isEmpty()) {
        return -1;
      }
      dust += maxHeap.extractMax();
      stops++;
    }
    dust -= distanceToNextWell;
    currentPosition = wellPosition;
    maxHeap.insert(fairyDust);
  }

  return stops;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let distance, initialDust, wells = [];

  rl.question('', (d) => {
    distance = parseInt(d);
    rl.question('', (dust) => {
      initialDust = parseInt(dust);
      rl.question('', (wellStr) => {
        wells = JSON.parse(wellStr);
        const result = minStopsToReachDestination(distance, initialDust, wells);
        console.log(result);
        rl.close();
      });
    });
  });
}

main();