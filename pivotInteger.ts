function pivotInteger(n: number): number {
  const array = Array.from({ length: n + 1 }, (_, index) => index);
  let left = 0,
    right = array.length - 1;
  let prefixSum = array[left],
    postfixSum = array[right];

  while (left !== right) {
    if (prefixSum < postfixSum) {
      prefixSum += array[++left];
    } else if (postfixSum < prefixSum) {
      postfixSum += array[--right];
    } else {
      prefixSum += array[++left];
    }
  }
  return prefixSum === postfixSum ? left : -1;
}

console.log(pivotInteger(1));
console.log(pivotInteger(8));
console.log(pivotInteger(4));
