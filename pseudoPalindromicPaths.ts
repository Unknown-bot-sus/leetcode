class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pseudoPalindromicPaths(root: TreeNode | null): number {
  let count = 0;

  function isParlindrome(counter: Map<number, number>) {
    let oddFrequencyCount = 0;

    for (let frequency of counter.values()) {
      if (frequency % 2 !== 0) {
        oddFrequencyCount++;
      }
    }

    return oddFrequencyCount <= 1;
  }

  function dfs(node: TreeNode | null, counter: Map<number, number>) {
    if (node === null) {
      return;
    }

    const prevCount = counter.get(node.val) ?? 0;
    counter.set(node.val, prevCount + 1);

    if (node.left === null && node.right === null) {
      if (isParlindrome(counter)) {
        count++;
      }
    }
    if (node.left !== null) {
      dfs(node.left, new Map(counter));
    }

    if (node.right !== null) {
      dfs(node.right, new Map(counter));
    }
  }

  dfs(root, new Map());

  return count;
}

// Example usage:
const root1 = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(3), new TreeNode(1)),
  new TreeNode(1, null, new TreeNode(1))
);
console.log(pseudoPalindromicPaths(root1)); // Output: 2

// const root2 = new TreeNode(
//   2,
//   new TreeNode(1, new TreeNode(1), new TreeNode(3, null, new TreeNode(1))),
//   null
// );
// console.log(pseudoPalindromicPaths(root2)); // Output: 1

// const root3 = new TreeNode(9);
// console.log(pseudoPalindromicPaths(root3)); // Output: 1
