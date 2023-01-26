function abv(value, key) {
    let newKey = key % 26
    let charArryay = ""
    for (let i = 0; i < value.length; i++) {
        let letterPosition = value.charCodeAt(i) + newKey
        if (letterPosition <= 122) {
            charArryay += String.fromCharCode(letterPosition)
        } else {
            charArryay += String.fromCharCode(96 + letterPosition % 122)
        }
    }
    console.log(charArryay)
}

const str = "a"
abv(str, 3);