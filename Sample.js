//Bubblesort
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// const arr = [1, 6, 3, -2, 0, 88, 6]
// bubbleSort(arr)
// console.log(arr);




// Insertion sort
// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j]
//             j -= 1
//         }
//         arr[j + 1] = current
//     }
// }

// const arr = [1, 6, 3, -2, 0, 88, 6]
// insertionSort(arr)
// console.log(arr);




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



//Quicksort
// function Quicksort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let leftArr = []
//     let rightArr = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             leftArr.push(arr[i])
//         } else {
//             rightArr.push(arr[i])
//         }
//     }

//     return [...Quicksort(leftArr), pivot, ...Quicksort(rightArr)]
// }

// const arr = [1, 6, 3, -2, 0, 88, 6]
// console.log(Quicksort(arr));



//Mergesort
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let middle = Math.floor(arr.length / 2)
//     let left = arr.slice(0, middle)
//     let right = arr.slice(middle)

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     let sortedArr = []
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortedArr.push(left.shift())
//         } else {
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr, ...left, ...right]
// }

// const arr = [98, 4, 3, -9, 55, 7]

// console.log(mergeSort(arr));


//input = [1,2,3]
//output = [1,2,3,1,2,3]

// function sample(arr) {
//     let length = arr.length
//     for (let i = 0; i < length; i++) {
//         arr.push(arr[i])
//     }
//     return arr
// }
// const arr = [1, 2, 3]
// console.log(sample(arr));



//second largest

// function secondLargest(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 let temp = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = temp
//             }
//         }
//     }
// }

// const arr = [1, 2, 3, 4, 5]
// secondLargest(arr)
// console.log(arr[1]);



//reverse a string
// function reverse(str) {
//     let stack = []
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     let reversed = ''
//     while (stack.length > 0) {
//         reversed += stack.pop()
//     }
//     return reversed
// }

// const str = "Arjun"
// let Reverse = reverse(str)
// console.log(Reverse);


//Minheap

class Sample {
    constructor() {
        this.heap = []
    }

    insert(num) {
        this.heap.push(num)
        if (this.heap.length > 1) {
            let idx = this.heap.length - 1
            let child = this.heap[idx]
            let parent = this.heap[idx / 2]
            while (child > parent) {
                if (idx >= 1) {
                    [parent, child] = [child, parent]
                    if (parent > 1) {
                        idx = parent
                    } else {
                        break
                    }
                }
            }
        }
    }

    remove() {
        let largest = this.heap[0]
        if (this.heap.length > 1) {
            this.heap[0] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)
            if (this.heap.length === 2) {
                if (this.heap[0] < this.heap[1]) {
                    [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
                }
                return largest
            }
            let i = 0
            let left = 2 * i + 1
            let right = 2 * i + 2
            while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                    i = 2 * i + 1
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                    i = 2 * i + 2
                }
                left = 2 * i
                right = 2 * i + 2
                if (this.heap[left] === undefined || this.heap[right] === undefined) {
                    break
                }
            }
        } else if (this.heap.length === 1) {

        } else {

        }
        return largest
    }
}

//Graph

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        this.adjacencyList[vertex1].add(vertex2)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "--->", [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("C", "A")

graph.display()