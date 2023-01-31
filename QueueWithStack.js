class Queue {
    constructor() {
        this.stack = []
    }

    enqueue(value) {
        this.stack.push(value)
    }

    dequeue() {
        if (!this.stack.length) {
            return null
        }
        if (this.stack.length === 1) {
            return this.stack.pop()
        }
        const value = this.stack.pop()
        const last = this.dequeue()
        this.stack.push(value)
        return last
    }
    peek() {
        return this.stack.length ? this.stack[0] : null;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue);

queue.dequeue()

console.log(queue);