class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    AddLast(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    print() {
        if (!this.head) {
            console.log('Nothing');
        } else {
            let curr = this.head
            console.log(curr.value);
            curr = curr.next
        }
    }
}

const list = new LinkedList()
list.AddLast(10)
list.AddLast(20)
list.AddLast(30)

list.print()
