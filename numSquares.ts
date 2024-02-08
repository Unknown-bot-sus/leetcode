function numSquares(n: number): number {
  const table = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  table[0] = 0;
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      table[i] = Math.min(table[i], table[i - j * j] + 1);
    }
  }

  return table[n];
}
