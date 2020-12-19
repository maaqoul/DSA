class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // breadth first search
  BFS() {
    const data = [];
    const queue = [this.root];
    const node = this.root;
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // pre-order depth first search
  DFSPreOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);
    }
    traverse(this.root);
    return data;
  }

  // post-order depth first search
  DFSPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  // in-order depth first search
  DFSInOrder() {
    const data = [];
    function traverse(node) {
      node.left && data.push(node.left);
      data.push(node.value);
      node.right && data.push(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const bts = new BinarySearchTree();

bts.insert(10);
bts.insert(5);
bts.insert(6);
bts.insert(8);
bts.insert(9);
console.log(bts);
