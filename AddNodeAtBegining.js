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

    AddFirst(value) {
        const node = new Node(value)
        if (!this.head) {

            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    print() {
        if (!this.head) {
            console.log('Nothing');
        } else {
            let temp = this.head
            console.log(temp.value);
            temp = temp.next
        }
    }
}

const list = new LinkedList()

list.AddFirst(10)
list.AddFirst(20)

list.AddFirst(2)

list.print()