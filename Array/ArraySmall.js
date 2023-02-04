function findXLargest(arr, x) {
    arr.sort((a, b) => b - a);
    return arr[x - 1];
}

const arr = [2, 5, 9, 47, 45, 0, 0]

console.log(findXLargest(arr, 2));