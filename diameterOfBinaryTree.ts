import { TreeNode } from "./treeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;

  let diameter = 0;

  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  getDepth(root);

  return diameter;
}
const tree = new TreeNode(1, new TreeNode(2));

console.log(diameterOfBinaryTree(tree));
