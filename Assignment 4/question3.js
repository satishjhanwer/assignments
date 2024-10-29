const readline = require("readline");

class FibHeapNode {
  constructor(key) {
    this.key = key;
    this.degree = 0;
    this.parent = null;
    this.child = null;
    this.left = this;
    this.right = this;
    this.mark = false;
  }
}

class FibonacciHeap {
  constructor() {
    this.min = null;
    this.totalNodes = 0;
  }

  _addToRootList(node) {
    if (!this.min) {
      this.min = node;
    } else {
      node.right = this.min;
      node.left = this.min.left;
      this.min.left.right = node;
      this.min.left = node;
    }
  }

  _removeFromRootList(node) {
    if (node.right === node) {
      this.min = null;
    } else {
      node.left.right = node.right;
      node.right.left = node.left;
      if (this.min === node) {
        this.min = node.right;
      }
    }
  }

  _consolidate() {
    const maxDegree = 50;
    const A = new Array(maxDegree + 1).fill(null);
    const rootNodes = Array.from(this._iterate(this.min));

    for (let w of rootNodes) {
      let x = w;
      let d = x.degree;
      while (A[d]) {
        let y = A[d];
        if (x.key > y.key) {
          let temp = x;
          x = y;
          y = temp;
        }
        this._link(y, x);
        A[d] = null;
        d += 1;
      }
      A[d] = x;
    }

    this.min = null;
    for (let i = 0; i <= maxDegree; i++) {
      if (A[i]) {
        if (!this.min || A[i].key < this.min.key) {
          this.min = A[i];
        }
      }
    }
  }

  _link(y, x) {
    this._removeFromRootList(y);
    y.left = y.right = y;
    y.parent = x;

    if (!x.child) {
      x.child = y;
    } else {
      y.right = x.child;
      y.left = x.child.left;
      x.child.left.right = y;
      x.child.left = y;
    }

    x.degree += 1;
    y.mark = false;
  }

  *_iterate(node) {
    if (!node) {
      return;
    }
    let start = node;
    do {
      yield node;
      node = node.right;
    } while (node !== start);
  }

  _cascadingCut(y) {
    const z = y.parent;
    if (z) {
      if (!y.mark) {
        y.mark = true;
      } else {
        this._cut(y, z);
        this._cascadingCut(z);
      }
    }
  }

  _cut(x, y) {
    if (y.child === x) {
      y.child = x.right !== x ? x.right : null;
    }
    x.left.right = x.right;
    x.right.left = x.left;
    y.degree -= 1;
    this._addToRootList(x);
    x.parent = null;
    x.mark = false;
  }

  _find(node, value) {
    if (!node) {
      return null;
    }
    const start = node;
    do {
      if (node.key === value) {
        return node;
      }
      const childResult = this._find(node.child, value);
      if (childResult) {
        return childResult;
      }
      node = node.right;
    } while (node !== start);
    return null;
  }

  insert(key) {
    const node = new FibHeapNode(key);
    if (!this.min) {
      this.min = node;
    } else {
      this._addToRootList(node);
      if (node.key < this.min.key) {
        this.min = node;
      }
    }
    this.totalNodes += 1;
    return node;
  }

  deleteMin() {
    const z = this.min;
    if (z) {
      if (z.child) {
        const children = Array.from(this._iterate(z.child));
        for (let child of children) {
          this._addToRootList(child);
          child.parent = null;
        }
      }
      this._removeFromRootList(z);
      if (z === z.right) {
        this.min = null;
      } else {
        this.min = z.right;
        this._consolidate();
      }
      this.totalNodes -= 1;
    }
  }

  replace(oldValue, newValue) {
    const node = this._find(this.min, oldValue);
    if (node) {
      node.key = newValue;
      const parent = node.parent;
      if (parent && node.key < parent.key) {
        this._cut(node, parent);
        this._cascadingCut(parent);
      }
      if (node.key < this.min.key) {
        this.min = node;
      }
    }
  }

  printRootCount() {
    if (!this.min) {
      return "None";
    }
    return Array.from(this._iterate(this.min)).length;
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let operationCount;
  const heap = new FibonacciHeap();

  rl.question("", n => {
    operationCount = parseInt(n);
    let processed = 0;
    rl.on("line", line => {
      const parts = line.split(" ");
      const operation = parts[0];
      if (operation === "I") {
        heap.insert(parseInt(parts[1]));
      } else if (operation === "D") {
        heap.deleteMin();
      } else if (operation === "R") {
        heap.replace(parseInt(parts[1]), parseInt(parts[2]));
      }
      processed++;
      if (processed === operationCount) {
        console.log(heap.printRootCount());
        rl.close();
      }
    });
  });
}

main();
