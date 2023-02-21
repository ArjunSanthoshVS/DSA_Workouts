const treeify = require('treeify')

class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    insert(num) {
        this.heap.push(num)
        if (this.heap.length > 2) {
            let idx = this.heap.length - 1
            while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2)
                    } else {
                        break
                    }
                }
            }
        }
    }

    remove() {
        let largest = this.heap[1]
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length === 3) {
                if (this.heap[1] < this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return largest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] == undefined || this.heap[right] == undefined) {
                    break;
                }
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return largest;
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(11)
maxHeap.insert(4)
maxHeap.insert(6)
maxHeap.insert(20)
maxHeap.insert(5)

console.log(treeify.asTree(maxHeap, true));

maxHeap.remove()

console.log(treeify.asTree(maxHeap, true));


// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         let currentIndex = this.heap.length - 1;
//         let parentIndex = Math.floor((currentIndex - 1) / 2);
//         while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
//             [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
//             currentIndex = parentIndex;
//             parentIndex = Math.floor((currentIndex - 1) / 2);
//         }
//     }

//     heapify(index, heapSize) {
//         const leftChildIndex = 2 * index + 1;
//         const rightChildIndex = 2 * index + 2;
//         let largest = index;
//         if (leftChildIndex < heapSize && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex;
//         }
//         if (rightChildIndex < heapSize && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }
//         if (largest !== index) {
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//             this.heapify(largest, heapSize);
//         }
//     }

//     buildHeap(array) {
//         this.heap = array;
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//             this.heapify(i, this.heap.length);
//         }
//     }

//     delete() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         const deletedValue = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapify(0);
//         return deletedValue;
//     }

//     heapSort() {
//         const heapSize = this.heap.length;
//         for (let i = heapSize - 1; i >= 1; i--) {
//             [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
//             this.heapify(0, i);
//         }
//         return this.heap;
//     }
// }


// const numbers = [8, 5, 3, 9, 2, 6, 1, 4, 0, 7];
// const maxHeap = new MaxHeap();

// // Build a max heap from the array
// maxHeap.buildHeap(numbers);

// // Sort the array using heap sort
// const sortedNumbers = maxHeap.heapSort();

// console.log(sortedNumbers); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
