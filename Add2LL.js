class linkedlist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    addtolist(value) {
        let node = {
            value: value,
            next: null
        }
        if (!this.head) {
            this.head = node
            this.tail = this.head
            this.length++
        } else {
            this.tail.next = node
            this.tail = node
            this.length++
        }
    }
}



// function add2linkedlist(list1, list2) {
//     let current1 = list1.head
//     let current2 = list2.head
//     let s1 = ""
//     let s2 = ""

//     while (current1 || current2) {

//         s1 += current1.value ? current1.value : ""
//         // s1.toString()






//         current1 = current1.next

//         s2 += current2.value ? current2.value.toString() : ""
//         // s2
//         current2 = current2.next
//     }
//     console.log("list1 = ", s1);
//     console.log("list2 = ", s2);
//     let sum = parseInt(s1) + parseInt(s2)
//     console.log(sum);
//     sum = sum + ""



// }

function add2linkedlist(list1, list2) {
    let current1 = list1.head
    let current2 = list2.head
    let s1 = ""
    let s2 = ""

    while (current1 || current2) {

        s1 += current1.value ? current1.value : ""
        // s1.toString()

        let j = s1.split("")
        let k = j.reverse()
        var l = k.join("")
        current1 = current1.next

        s2 += current2.value ? current2.value.toString() : ""
        // s2
        let m = s2.split("")
        var n = m.reverse()
        var o = n.join("")
        current2 = current2.next
    }
    console.log("list1 = ", l);
    console.log("list2 = ", o);
    let sum = parseInt(l) + parseInt(o)
    console.log(sum);
    sum = sum + ""



}



const list1 = new linkedlist()
list1.addtolist(2)
list1.addtolist(4)
list1.addtolist(3)

const list2 = new linkedlist()
list2.addtolist(5)
list2.addtolist(6)
list2.addtolist(4)

console.log(list1);
console.log(list2);


add2linkedlist(list1, list2)



