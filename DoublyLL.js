class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node to the end of the list
    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove the last node from the list
    pop() {
        if (!this.head) return;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const tail = this.tail;
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return this;
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);