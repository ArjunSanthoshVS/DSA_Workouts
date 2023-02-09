class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                return undefined;
            }
        }
    }

    inOrderArray(node, arr) {
        if (!node) return;
        this.inOrderArray(node.left, arr);
        arr.push(node.val);
        this.inOrderArray(node.right, arr);
    }

    convertToBalancedBST(node, arr, start, end) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let newNode = new Node(arr[mid]);
        newNode.left = this.convertToBalancedBST(node, arr, start, mid - 1);
        newNode.right = this.convertToBalancedBST(node, arr, mid + 1, end);
        return newNode;
    }

    balance() {
        let arr = [];
        this.inOrderArray(this.root, arr);
        this.root = this.convertToBalancedBST(this.root, arr, 0, arr.length - 1);
        return this;
    }
}

let bst = new BST();
bst.insert(10).insert(5).insert(15).insert(3).insert(7).insert(20);
console.log("Unbalanced BST: ", bst);
bst.balance();
console.log("Balanced BST: ", bst);
