const readline = require("node:readline");

class RedBlackNode {
  constructor(key, index, color = "red") {
    this.key = key;
    this.index = index;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.NIL = new RedBlackNode(null, null, "black");
    this.root = this.NIL;
  }

  rotateLeft(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== this.NIL) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  rotateRight(x) {
    const y = x.left;
    x.left = y.right;
    if (y.right !== this.NIL) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  fixInsert(node) {
    while (node.parent && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = "black";
  }

  insert(key, index) {
    let node = new RedBlackNode(key, index);
    let y = null;
    let x = this.root;

    while (x !== this.NIL) {
      y = x;
      if (node.key < x.key) {
        x = x.left;
      } else if (node.key > x.key) {
        x = x.right;
      } else {
        if (node.index < x.index) {
          x.index = node.index;
        }
        return;
      }
    }

    node.parent = y;
    if (y === null) {
      this.root = node;
    } else if (node.key < y.key) {
      y.left = node;
    } else {
      y.right = node;
    }

    node.left = this.NIL;
    node.right = this.NIL;
    node.color = "red";

    this.fixInsert(node);
  }

  findSuccessor(key) {
    let root = this.root;
    let succ = null;
    while (root !== this.NIL) {
      if (key <= root.key) {
        succ = root;
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return succ;
  }

  findPredecessor(key) {
    let root = this.root;
    let pred = null;
    while (root !== this.NIL) {
      if (key >= root.key) {
        pred = root;
        root = root.right;
      } else {
        root = root.left;
      }
    }
    return pred;
  }
}

function something(A, n) {
  const nextOdd = Array(n).fill(null);
  const nextEven = Array(n).fill(null);

  const treeOdd = new RedBlackTree();
  const treeEven = new RedBlackTree();

  for (let i = n - 1; i >= 0; i--) {
    const result = treeOdd.findSuccessor(A[i]);
    if (result !== null) {
      nextOdd[i] = result.index;
    }
    treeOdd.insert(A[i], i);
  }

  for (let i = n - 1; i >= 0; i--) {
    const result = treeEven.findPredecessor(A[i]);
    if (result !== null) {
      nextEven[i] = result.index;
    }
    treeEven.insert(A[i], i);
  }

  const canReachOdd = Array(n).fill(false);
  const canReachEven = Array(n).fill(false);

  canReachOdd[n - 1] = true;
  canReachEven[n - 1] = true;

  for (let i = n - 2; i >= 0; i--) {
    if (nextOdd[i] !== null) {
      canReachOdd[i] = canReachEven[nextOdd[i]];
    }

    if (nextEven[i] !== null) {
      canReachEven[i] = canReachOdd[nextEven[i]];
    }
  }

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (canReachOdd[i]) {
      count++;
    }
  }
  count++;

  console.log(count);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let numberOfStudents,
    studentArray = [];

  rl.question("", n => {
    numberOfStudents = parseInt(n);
    rl.question("", studentStr => {
      studentArray = studentStr.split(" ").map(Number);

      if (numberOfStudents === 1) {
        console.log(1);
        return;
      }
      something(studentArray, numberOfStudents);
      rl.close();
    });
  });
}

main();
