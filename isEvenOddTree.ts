import { TreeNode } from "./treeNode";

function isEvenOddTree(root: TreeNode | null): boolean {
  if (root === null) return false;
  const levels = getLevelNodes(root);
  for (let i = 0; i < levels.length; i++) {
    const isOddLevel = i % 2 !== 0;
    let prev = isOddLevel ? Infinity : -Infinity;
    const checker = isOddLevel
      ? (node: TreeNode) => {
          const temp = prev;
          prev = node.val;
          return node.val % 2 === 0 && node.val < temp;
        }
      : (node: TreeNode) => {
          const temp = prev;
          prev = node.val;
          return node.val % 2 === 1 && node.val > temp;
        };

    for (let node of levels[i]) {
      if (!checker(node)) {
        return false;
      }
    }
  }
  return true;
}

function getLevelNodes(root: TreeNode): TreeNode[][] {
  const queue = [[root]];
  while (true) {
    const level = [];
    for (let node of queue[queue.length - 1]) {
      if (node.left) level.push(node.left);
      if (node.right) level.push(node.right);
    }
    if (level.length === 0) break;
    queue.push(level);
  }

  return queue;
}

// const root = new TreeNode(
//   5,
//   new TreeNode(4, new TreeNode(3), new TreeNode(3)),
//   new TreeNode(2, new TreeNode(7))
// );

// const root = new TreeNode(
//   1,
//   new TreeNode(
//     10,
//     new TreeNode(3),
//     new TreeNode(7, new TreeNode(12), new TreeNode(8))
//   ),
//   new TreeNode(4, new TreeNode(9), new TreeNode(6, new TreeNode(2)))
// );

function arrayToTreeNode(arr: any) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift()!;
    const leftVal = arr[i++];
    const rightVal = arr[i++];

    if (current === null) continue;

    if (leftVal !== null) {
      current.left = new TreeNode(leftVal);
      queue.push(current.left);
    }
    if (rightVal !== null) {
      current.right = new TreeNode(rightVal);
      queue.push(current.right);
    }
  }

  return root;
}

const root = arrayToTreeNode([
  1,
  10,
  4,
  3,
  null,
  7,
  9,
  12,
  8,
  6,
  null,
  null,
  2,
]);

console.log(isEvenOddTree(root));
