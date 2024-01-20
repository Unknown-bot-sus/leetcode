function generateParenthesis(n: number): string[] {
  return backtrack("", 0, 0, n);
}

function backtrack(
  partial: string,
  left: number,
  right: number,
  n: number
): Array<string> {
  if (partial.length == n * 2) {
    return [partial];
  }

  let result: Array<string> = [];

  if (left < n) {
    result = result.concat(backtrack(partial + "(", left + 1, right, n));
  }

  if (right < left) {
    result = result.concat(backtrack(partial + ")", left, right + 1, n));
  }

  return result;
}

console.log(generateParenthesis(3));
