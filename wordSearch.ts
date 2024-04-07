function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  function backtrack(i: number, j: number, k: number): boolean {
    if (k === word.length) {
      // means we have found the full string
      return true;
    }
    console.log(i, j);

    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false;
    }

    const temp = board[i][j];

    board[i][j] = "";

    const result =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j - 1, k + 1);

    board[i][j] = temp;

    return result;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
