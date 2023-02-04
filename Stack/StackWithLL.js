class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.size = 0
    }

    push(value) {
        const node = new Node(value)
        if (!this.bottom) {
            this.top = node
            this.bottom = node
        } else {
            this.top.next = this.head
            this.top.next = node
        }
        this.size++
        return this.size
    }
    pop() {
        if (!this.bottom) {
            return 'Nothing'
        } else {
            this.top.prev = this.top
            this.size--
        }
    }
}

const list = new Stack()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(100)
console.log(list, 'llll');
list.pop()
console.log(list, 'ppppp');
