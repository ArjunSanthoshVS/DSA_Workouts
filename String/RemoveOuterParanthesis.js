function removeOuterParanthesis(str) {
    let outer = ""
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] == "{" || str[i] == "[") {
            count++
        }
        if (count > 1) {
            outer += str[i]
        }
        if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
            count--
        }
    }
    return outer
}

const str = "[{{}}]"
console.log(removeOuterParanthesis(str));