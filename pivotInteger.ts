function pivotInteger(n: number): number {
  let left = 0,
    right = n;
  let prefixSum = left,
    postfixSum = right;

  while (left !== right) {
    if (prefixSum < postfixSum) {
      prefixSum += ++left;
    } else if (postfixSum < prefixSum) {
      postfixSum += --right;
    } else {
      prefixSum += ++left;
    }
  }
  return prefixSum === postfixSum ? left : -1;
}

console.log(pivotInteger(1));
console.log(pivotInteger(8));
console.log(pivotInteger(4));
