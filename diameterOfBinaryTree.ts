import { TreeNode } from "./treeNode";

function getHeightOfTree(root: TreeNode | null): number {
  if (root === null) return 0;

  return Math.max(getHeightOfTree(root.left), getHeightOfTree(root.right)) + 1;
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;

  const leftHeight = getHeightOfTree(root.left);
  const rightHeight = getHeightOfTree(root.right);

  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  return Math.max(
    leftHeight + rightHeight,
    Math.max(leftDiameter, rightDiameter)
  );
}

const tree = new TreeNode(1, new TreeNode(2));

console.log(diameterOfBinaryTree(tree));
