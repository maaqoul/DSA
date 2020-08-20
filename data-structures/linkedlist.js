/**
 * In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. 
 * Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence
 * -wikipedia
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // insert to the list;
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // output this node
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }

    // remove last node (the tail)
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous
        this.length--
        if (!this.length) {
            this.head = null;
            this.tail = null
        }
        return current
    }

    //remove the first element
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current
    }

    //insert to the head 
    unShift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    // get the element in the given position
    get(position) {
        if (position >= this.length) return undefined;

        if (position === 0) {
            return this.head;
        } else if (position === this.length - 1) {
            return this.tail;
        } else {
            let current = this.head;
            for (let i = 0; i < position; i++) {
                current = current.next;
            }
            return current;
        }
    }

    // set value into a given position
    set(position, value) {
        const current = this.get(position)
        if (!current) return undefined;
        current.value = value;
        return current
    }

    //add a node in a given position
    insertInto(position, value) {
        if (position > this.length) return undefined;
        if (position === 0) this.unShift(value);
        else if (position === this.length) this.push(value);
        else {
            const newNode = new Node(value);
            let current = this.get(position)
            let previous = this.get(position - 1)
            previous.next = newNode;
            newNode.next = current;
            this.length++;
            return this;
        }
    }

    // remove a node from a given position;
    remove(position) {
        if (position >= this.length) return undefined;
        if (position === 0) this.shift();
        else if (position === this.length - 1) this.pop();
        else {
            let next = this.get(position + 1);
            let previous = this.get(position - 1);
            previous.next = next;
            this.length--;
            return this;
        }
    }

    // reverse the order of nodes
    reverse() {
        if (!this.head) return undefined;
        let current = this.head
        let next = null;
        let prev = null;
        while(current.next) {
            next = current.next
            current.next = prev
            prev = current;
            current = next;
        }
        this.head = prev
        return this;
    }
}

const list = new LinkedList();
list.push('hicham');
list.push(15);
list.push(20);
list.unShift('said');
//
list.traverse()
console.log('-----------------------------------------')

list.set(2, 'abdo')
list.traverse()
console.log('-----------------------------------------')
list.reverse()
list.traverse()