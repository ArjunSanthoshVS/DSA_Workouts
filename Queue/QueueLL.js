const LinkedList = require('../LinkedList/LinkedList')

class QueueLL {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        return this.list.append(value)
    }

    dequeue() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        this.list.print()
    }

}

const queuell = new QueueLL()

queuell.enqueue(10)
queuell.enqueue(20)
queuell.enqueue(30)
queuell.enqueue(40)

console.log(queuell.getSize());

console.log(queuell.isEmpty());

queuell.print()

queuell.dequeue()

queuell.print()