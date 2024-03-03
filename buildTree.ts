import { TreeNode } from "./treeNode";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const mid = inorder.findIndex((num) => num === root.val);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
