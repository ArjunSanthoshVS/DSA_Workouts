function StringToBinary(str) {
    let binary = ''
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        binary += code.toString() + ' '
    }
    return binary
}

let str = "Hai"
console.log(StringToBinary(str));