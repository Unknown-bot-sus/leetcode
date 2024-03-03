import { TreeNode } from "./treeNode";

function kthSmallest(root: TreeNode | null, k: number): number {
  function traverse(root: TreeNode | null): number | undefined {
    if (root === null) {
      return;
    }
    const val = traverse(root.left);
    --k;

    if (val !== undefined) return val;

    if (k === 0) return root.val;
    return traverse(root.right);
  }

  return traverse(root) ?? -1;
}

const root = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)));

console.log(kthSmallest(root, 1));
