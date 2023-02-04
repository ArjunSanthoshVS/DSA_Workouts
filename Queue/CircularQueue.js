class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        } else {
            console.log('Its not working');
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                console.log(this.items[i]);
            }
        }
    }
}

const cQueue = new CircularQueue(5)

cQueue.enqueue(10)
cQueue.enqueue(20)
cQueue.enqueue(30)
cQueue.enqueue(40)
cQueue.enqueue(50)

cQueue.print()

cQueue.dequeue()

cQueue.print()