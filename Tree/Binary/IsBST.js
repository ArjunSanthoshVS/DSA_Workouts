const BinarySearch = require("./BinarySearchTree")

class isBst {
    constructor() {
        this.binary = new BinarySearch()
    }

    insert(value) {
        this.binary.insert(value)
    }

    check(root, min = null, max = null) {
        if (!root) {
            return true
        }
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
            return false
        }
        if (!this.check(root.left, min, root.value) || !this.check(root.right, root.value, max)) {
            return false
        }
        return true
    }
}

const bst = new isBst()

bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.insert(4)
bst.insert(6)


const isTreeBST = bst.check(bst.root);
console.log(isTreeBST); // true
