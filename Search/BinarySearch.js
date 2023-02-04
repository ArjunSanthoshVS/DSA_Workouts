//Iterative

function binarySearch(arr, x) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (arr[middle] === x) {
            return middle
        } else if (arr[middle] < x) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(arr, 8));


//Recursive

function RbinarySearch(arr, left, right, x) {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === x) {
        return mid
    } else if (arr[mid] < x) {
        return RbinarySearch(arr, mid + 1, right, x)
    } else {
        return RbinarySearch(arr, left, mid - 1, x)
    }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(RbinarySearch(arr1, 0, arr1.length, 7));
