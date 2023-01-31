// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let middle = Math.floor(arr.length / 2)
//     let leftArr = arr.slice(0, middle)
//     let rightArr = arr.slice(middle)

//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr) {
//     let sortArr = []
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortArr.push(leftArr.shift())
//         } else {
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return [...sortArr, ...leftArr, ...rightArr]
// }

// const arr = [98, 4, 3, -9, 55, 7]

// console.log(mergeSort(arr));

//Selection sort

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if (minIndex !== i) {
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

// const arr = [1, 6, 3, -2, 0, 88, 6]

// console.log(selectionSort(arr));


class Queue {
    constructor() {
        this.stack = [];
    }

    enqueue(value) {
        this.stack.push(value);
    }

    dequeue() {
        if (!this.stack.length) return null;
        if (this.stack.length === 1) return this.stack.pop();

        const value = this.stack.pop();
        const last = this.dequeue();
        this.stack.push(value);
        return last;
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