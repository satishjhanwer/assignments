const readline = require('node:readline');

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(point, dist) {
    this.heap.push([dist, point]);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element[0] <= parent[0]) break;

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
        if (leftChild[0] > element[0]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] > element[0]) ||
          (swap !== null && rightChild[0] > leftChild[0])
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

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }
}

function getDistance(point) {
  let [x, y, z] = point;
  return x * x + y * y + z * z;
}

function kClosestPointsToOrigin(N, K, points) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < N; i++) {
    const point = points[i];
    const dist = getDistance(point);

    if (maxHeap.size() < K) {
      maxHeap.insert(point, dist);
    }
    else if (dist < maxHeap.peek()[0]) {
      maxHeap.extractMax();
      maxHeap.insert(point, dist);
    }
  }

  let result = [];
  while (!maxHeap.isEmpty()) {
    result.push(maxHeap.extractMax()[1]);
  }

  return result.reverse();
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let numberOfPoints, closestPoints, points = [];

  rl.question('', (n) => {
    numberOfPoints = parseInt(n);
    rl.question('', (k) => {
      closestPoints = parseInt(k);
      rl.question('', (pointsStr) => {
        points = JSON.parse(pointsStr);
        const result = kClosestPointsToOrigin(numberOfPoints, closestPoints, points);
        console.log(JSON.stringify(result));
        rl.close();
      });
    });
  });
}

main();