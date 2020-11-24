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
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add a node as a head

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get the node at the given index

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while(count !== index) {
        current = current.previous
        count--;
      }
      return current
    }
  }

  // set the value of a given node

  set(index, val) {
    const foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  // insert a node at a given index

  insert(index, node) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(node)
    if(index === this.length) return !!this.push(node)
    const newNode = new Node(node);
    const beforeNode = this.get(index);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.previous = beforeNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;
    this.length++;
    return true;
  }

  // remove a node at given index

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if(index === 0) return !!this.shift();
    if(index === length - 1) return !!this.pop();
    const removedNode = this.get(index);
    removedNode.previous.next = removedNode.next
    removedNode.next.previous = removedNode.previous
    removedNode.next = null
    removedNode.previous = null
    this.length--
    return removedNode
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
