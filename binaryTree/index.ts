import { Node } from "./node"

class BinaryTree<T> {
    public root: Node<T> | null;
    constructor(arr: Array<T> = []) {
        this.root = null;
        for (let el of arr) {
            this.add(el);
        }
    }

    add(val: T): void {
        if (this.root === null) {
            this.root = new Node(val);
            return;
        }

        if (this.has(val)) {
            return;
        }
        
        this.addNode(val, this.root);
    }

    addNode(val: T, node: Node<T>): void {
        if (val < node.val) {
            if (node.left === null) {
                node.left = new Node(val);
                return;
            }
            return this.addNode(val, node.left)
        }

        if (node.right === null) {
            node.right = new Node(val);
            return;
        }

        return this.addNode(val, node.right);
    }

    remove(val: T): void {
        if (this.root === null) return;

        if (val === this.root.val) {
            if (this.root.isLeaf()) {
                this.root = null;
                return;
            }

            if (this.root.left) {
                this.root = this.root.left
            } else {
                this.root = this.root.right
            }
        } 
        this.removeNode(val, this.root);
    }
    
    addTree(root: Node<T> | null) {
        if (root === null) return;

        this.add(root.val);
        this.addTree(root.left);
        this.addTree(root.right);
    }

    removeNode(val: T, node: Node<T> | null): void {
        if (node === null) return;

        if (node.left !== null && node.left.val === val) {
            if (node.left.isLeaf()) {
                node.left = null;
                return;
            } 

            const left = node.left!;
            node.left = null;
            this.addTree(left.left);
            this.addTree(left.right);
            return;
        }

        if (node.right !== null && node.right.val === val) {
            if (node.right.isLeaf()) {
                node.right = null;
                return;
            }

            const right = node.right!;
            node.right = null;
            this.addTree(right.left);
            this.addTree(right.right);
            return;
        }

        if (val < node.val) {
            return this.removeNode(val, node.left);
        }

        this.removeNode(val, node.right);
    }

    has(val: T): boolean {
        if (this.root === null) return false;

        return this.containsNode(val, this.root);
    }

    containsNode(val: T, node: Node<T> | null): boolean {
        if (node === null) return false;

        if (node.val === val) {
            return true;
        }

        if (val < node.val) {
            return this.containsNode(val, node.left);
        }

        return this.containsNode(val, node.right);
    }
}

class MyHashSet {
    private tree: BinaryTree<number>;

    constructor() {
        this.tree = new BinaryTree();
    }

    add(key: number): void {
        this.tree.add(key)
    }

    remove(key: number): void {    
        this.tree.remove(key)
    }

    contains(key: number): boolean { 
        return this.tree.has(key)
    }
}

//29
// 8

const methods = ["add","contains","add","contains","remove","add","contains","add","add","add","add","add","add","contains","add","add","add","contains","remove","contains","contains","add","remove","add","remove","add","remove","add","contains","add","add","contains","add","add","add","add","remove","contains","add","contains","add","add","add","remove","remove","add","contains","add","add","contains","remove","add","contains","add","remove","remove","add","contains","add","contains","contains","add","add","remove","remove","add","remove","add","add","add","add","add","add","remove","remove","add","remove","add","add","add","add","contains","add","remove","remove","remove","remove","add","add","add","add","contains","add","add","add","add","add","add","add","add"]
const vals = [[58],[0],[14],[58],[91],[6],[58],[66],[51],[16],[40],[52],[48],[40],[42],[85],[36],[16],[0],[43],[6],[3],[25],[99],[66],[60],[58],[97],[3],[35],[65],[40],[41],[10],[37],[65],[37],[40],[28],[60],[30],[63],[76],[90],[3],[43],[81],[61],[39],[75],[10],[55],[92],[71],[2],[20],[7],[55],[88],[39],[97],[44],[1],[51],[89],[37],[19],[3],[13],[11],[68],[18],[17],[41],[87],[48],[43],[68],[80],[35],[2],[17],[71],[90],[83],[42],[88],[16],[37],[33],[66],[59],[6],[79],[77],[14],[69],[36],[21],[40]]

const hash = new MyHashSet();

for (let i = 0; i < 29; i++) {
    const method = methods[i];
    const val = vals[i][0]

    // @ts-ignore
    console.log(hash[method](val))
}

console.log(methods.slice(0, 29))

console.log(methods[28])
console.log(vals[28])

const indices = [];

for (let i = 0; i < vals.length; i++) {
    const val = vals[i][0]
    if (val === 58) {
        indices.push(i)
    }
}

console.log(indices)
for (let i of indices) {
    console.log(methods[i])
}