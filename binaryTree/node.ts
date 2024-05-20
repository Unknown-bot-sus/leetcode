export class Node<T> {
    public val: T;
    public left: Node<T> | null;
    public right: Node<T> | null;

    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    isLeaf() {
        return this.left === null && this.right === null;
    }
}

