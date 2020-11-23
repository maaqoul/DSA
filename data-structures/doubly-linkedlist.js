//  1 -> 2 -> 3 -> 4

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove last node (the tail)
  pop() {
    if (!this.head) return undefined;
    const tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.previous;
      this.tail.next = null;
      tail.previous = null;
    }
    this.length--;
    return tail;
  }

  // remove first node

  shift() {
    if (!this.length) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.previous = null
    }
    this.length--;
    return oldHead
  }
}

const list = new doublyLinkedList();
console.log(list);
console.log("----------------");
list.push(1);
console.log(list);
console.log("----------------");
list.push(2);
console.log(list);
console.log("----------------");
list.push(3);
console.log(list);
console.log("----------------");
var popped = list.pop();
console.log(popped);
console.log("----------------");
var shifted = list.shift();
console.log(shifted, list);
console.log("----------------");
