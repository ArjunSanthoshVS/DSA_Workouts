class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }
    display() {
        for (let i = 0; i < table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}
const table = new HashTable(50)

table.set('name', 'Arjun')
table.set('age', 21)
table.display();


// =======
// function add2linkedlist(list1, list2) {
//     let current1 = list1.head
//     let current2 = list2.head
//     let s1 = ""
//     let s2 = ""

//     while (current1 || current2) {

//         s1 += current1.value ? current1.value : ""
//         // s1.toString()

//         let j = s1.split("")
//         let k = j.reverse()
//         var l = k.join("")
//         current1 = current1.next

//         s2 += current2.value ? current2.value.toString() : ""
//         // s2
//         let m = s2.split("")
//         var n = m.reverse()
//         var o = n.join("")
//         current2 = current2.next
//     }
//     console.log("list1 = ", l);
//     console.log("list2 = ", o);
//     let sum = parseInt(l) + parseInt(o)
//     console.log(sum);
//     sum = sum + ""



// }