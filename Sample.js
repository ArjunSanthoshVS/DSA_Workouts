//Input [1,2,3]
//output [1,2,3,1,2,3]
const arr = [1, 2, 3]
let result = []

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
}

console.log(result);