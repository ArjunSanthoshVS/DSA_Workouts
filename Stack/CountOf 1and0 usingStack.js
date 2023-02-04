function checkCount(arr) {
    let stack = []
    let count1 = 0
    let count0 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            stack.push(0)
            count0++
        } if (arr[i] === 1) {
            stack.push(1)
            count1++
        }
    }
    return count0 === count1
}

const arr = [0, 1, 0, 1]

console.log(checkCount(arr));
