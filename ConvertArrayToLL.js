class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    fromArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
        return this;
    }

    print() {
        if (!this.head) {
            console.log('Nothing');
        } else {
            let curr = this.head
            while (curr) {
                console.log(curr.data);
                curr = curr.next
            }
        }
    }
}

const list = new LinkedList()
list.fromArray([1, 2, 3, 4, 5])
list.print()
