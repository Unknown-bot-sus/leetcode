
//   Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}


function isSymmetric(root) {
    const queue = [root];
    const result = [];
    
    while (queue.length !== 0) {
        const currentLevel = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(currentLevel);
    }

    for (let level of result) {
        for (let i = 0; i < level.length / 2; i++) {
            if (level[i] !== level[level.length - 1 - i]) {
                return false;
            }
        }
    }

    return true;
}

const root = new TreeNode(0);

root.left = new TreeNode(1);

root.left.right = new TreeNode(2);

root.right = new TreeNode(1);

root.right.right = new TreeNode(2)