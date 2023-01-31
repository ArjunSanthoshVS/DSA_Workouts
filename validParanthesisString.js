function validParanthesis(str) {
    const stack = []
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i)
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0
}

let str = "{}"
console.log(validParanthesis(str));
