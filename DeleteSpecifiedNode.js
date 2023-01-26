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

    Delete(value) {
        if (!this.head) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.length--
            return value
        } else {
            let curr = this.head
            while (curr.next && curr.next.value !== value) {
                curr = curr.next
            }
            if (curr.next) {
                let temp = curr.next
                curr.next = temp.next
                this.length--
                return value
            }
            return null
        }
    }

    print() {
        if (!this.head) {
            console.log('Nothing');
        } else {
            let curr = this.head
            console.log(curr);
            curr = curr.next
        }
    }
}

const list = new LinkedList()
list.AddLast(10)
list.AddLast(20)
list.AddLast(30)
list.AddLast(40)

list.print()

list.Delete(30)

list.print()