const readline = require('node:readline');

class Node {
  constructor(key, value) {
    this.key = key;
    this.values = [value];
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'RED';
  }

  isRed() {
    return this.color === 'RED';
  }

  isBlack() {
    return this.color === 'BLACK';
  }

  setRed() {
    this.color = 'RED';
  }

  setBlack() {
    this.color = 'BLACK';
  }

  hasChildren() {
    return this.left !== null || this.right !== null;
  }

  toString() {
    return `Node(key=${this.key}, value=${this.values}, color=${this.color})`;
  }
}

class RedBlackTree {
  constructor() {
    this.NIL = new Node(null, null);
    this.NIL.setBlack();
    this.root = this.NIL;
  }

  insert(key, value) {
    let node = new Node(key, value);
    node.left = this.NIL;
    node.right = this.NIL;

    let y = null;
    let x = this.root;

    while (x !== this.NIL) {
      y = x;
      if (node.key < x.key) {
        x = x.left;
      } else if (node.key > x.key) {
        x = x.right;
      } else {
        x.values.push(value);
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

    this.insertFixup(node);
  }

  insertFixup(node) {
    while (node.parent !== null && node.parent.isRed()) {
      if (node.parent === node.parent.parent.left) {
        let y = node.parent.parent.right;
        if (y.isRed()) {
          node.parent.setBlack();
          y.setBlack();
          node.parent.parent.setRed();
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.setBlack();
          node.parent.parent.setRed();
          this.rightRotate(node.parent.parent);
        }
      } else {
        let y = node.parent.parent.left;
        if (y.isRed()) {
          node.parent.setBlack();
          y.setBlack();
          node.parent.parent.setRed();
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.setBlack();
          node.parent.parent.setRed();
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.setBlack();
  }

  leftRotate(x) {
    let y = x.right;
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

  rightRotate(x) {
    let y = x.left;
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

  findNextLarger(key) {
    let node = this.root;
    let result = null;

    while (node !== this.NIL) {
      if (node.key > key) {
        result = node;
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return result ? Math.min(...result.values) : null;
  }

  findNextSmaller(key) {
    let node = this.root;
    let result = null;

    while (node !== this.NIL) {
      if (node.key < key) {
        result = node;
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return result ? Math.max(...result.values) : null;
  }
}

function countSubmittedSheets(n, A) {
  const tree = new RedBlackTree();
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    tree.insert(A[i], i);
    let current = i;
    let t = 1;

    while (current < n - 1) {
      let next;
      if (t % 2 === 1) {
        next = tree.findNextLarger(A[current]);
      } else {
        next = tree.findNextSmaller(A[current]);
      }

      if (next === null || next <= current) break;

      current = next;
      t++;
    }

    if (current === n - 1) count++;
  }

  return count;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let numberOfStudents, studentArray = [];

  rl.question('', (n) => {
    numberOfStudents = parseInt(n);
    rl.question('', (studentStr) => {
        studentArray = studentStr.split(' ').map(Number);
        const result = countSubmittedSheets(numberOfStudents, studentArray);
        console.log(result);
        rl.close();
      });
  });
}

main();