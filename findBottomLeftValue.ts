function findBottomLeftValue(root: TreeNode | null): number {
  let deepest: TreeNode;

  if (root === null) return -1;

  function bfs(root: TreeNode | null) {
    if (root === null) return;
    const queue = [root];

    while (queue.length !== 0) {
      const node = queue.shift()!;

      deepest = node;

      if (node.right) {
        queue.push(node.right);
      }

      if (node.left) {
        queue.push(node.left);
      }
    }
  }

  bfs(root);

  return deepest!.val;
}
