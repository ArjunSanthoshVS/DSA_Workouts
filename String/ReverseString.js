// function rev(str) {
//     return str.split('').reverse().join('')
// }

// console.log(rev('aabbcc'));


function reverse(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString
}

console.log(reverse('ssssssssaabbcc'));
