// Input
// num = [1, 2, 0, 0]  k = 34
// Explanation: 1200 + 34 = 1234

// Output
// num = [1,2,3,4]

// function addToArrayForm(num, k) {
//     let carry = 0
//     let i = num.length - 1

//     while (i > 0 || k > 0) {
//         let sum = carry
//         if (i >= 0) {
//             sum += num[i]
//         }
//         if (k > 0) {
//             sum += k % 10
//         }
//         num[i] = sum % 10
//         carry = Math.floor(sum / 10)
//         i--
//         k = Math.floor(k / 10)
//     }
//     if (carry > 0) {
//         num.unshift(carry)
//     }
//     return num
// }

// let num = [0]
// let k = 34

// console.log(addToArrayForm(num, k));

function addToArrayForm(num, k) {
    let carry = 0;
    let i = num.length - 1;
    const result = [];
    while (i >= 0 || k > 0 || carry) {
        const digit1 = i >= 0 ? num[i] : 0;
        const digit2 = k % 10;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
        i--;
        k = Math.floor(k / 10);
    }
    return result;
}

// example usage:
const num = [1];
const k = 34;
const result = addToArrayForm(num, k);
console.log(result); // output: [1, 2, 3, 4]