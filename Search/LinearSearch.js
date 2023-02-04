function LinearSearch(arr, value) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        } else {
            return 'Nothing'
        }
    }
}

const arr = [2, 5, 9, 4, 7, 74, 3]
console.log(LinearSearch(arr, 8787));