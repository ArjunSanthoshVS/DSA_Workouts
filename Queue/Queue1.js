class Queue1 {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++
    }

    dequeue() {
        const result = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return result;
    }

    print() {
        console.log(this.items);
    }
}

const queue1 = new Queue1

queue1.enqueue(10)
queue1.enqueue(20)
queue1.enqueue(30)
queue1.enqueue(40)
queue1.enqueue(50)
queue1.print()
