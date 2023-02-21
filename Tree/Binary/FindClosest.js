class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class Closest {
    constructor() {
        this.root = 0
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    closestValue(value) {
        let closest = null
        let current = this.root
        // console.log(current.value);
        let difference = Infinity
        while (current) {
            let newDifference = Math.abs(value - current.value)
            if (newDifference < difference) {
                closest = current.value
                difference = newDifference
            }
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                break
            }
        }
        return closest
    }
}

const closest = new Closest()

closest.insert(10);
closest.insert(5);
closest.insert(15);
closest.insert(2);
closest.insert(7);
closest.insert(12);
closest.insert(20);


console.log(closest.closestValue(1));

