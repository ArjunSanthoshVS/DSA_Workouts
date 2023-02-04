function sample(str) {
    let count = 1;
    let string = '';
    let i = 0;
    let charArray = str.split('');
    while (i < str.length) {
        count = 1;
        i++;
        while (i < str.length && charArray[i - 1] === charArray[i]) {
            count++;
            i++;
        }
        string += count + charArray[i - 1];
    }
    console.log(string);
}

let str = 'AAABBC'
sample(str);