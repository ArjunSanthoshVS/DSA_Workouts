//construction

class Node {
    constructor() {
        this.value = value
        this.next = null
    }
}

class SinglyLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        const value = this.tail.value
        if (this.length === 1) {
            this.head = null
            this.tail - null
        } else {
            let prev = this.head
            while (prev.next != this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.length--
        return value
    }
}