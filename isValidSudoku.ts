function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const hashSet = new Set();
    const colHashSet = new Set();
    const gridSet = new Set();

    const offsetX = i * 3;

    for (let j = 0; j < board.length; j++) {
      const cell = board[i][j];
      const colCell = board[j][i];

      const innerX = Math.floor(j / 3);
      const x = (innerX % 3) + offsetX;
      const offsetY = Math.floor(x / 9) * 3;
      const row = x % 9;
      const col = (j % 3) + offsetY;
      const gCell = board[row][col];

      // checking col
      if (cell !== ".") {
        if (hashSet.has(cell)) {
          return false;
        }

        hashSet.add(cell);
      }

      // checking row
      if (colCell !== ".") {
        if (colHashSet.has(colCell)) {
          return false;
        }

        colHashSet.add(colCell);
      }

      // checking col
      if (gCell !== ".") {
        if (gridSet.has(gCell)) {
          return false;
        }

        gridSet.add(gCell);
      }
    }
  }

  return true;
}

// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

// console.log(
//   isValidSudoku([
//     [".", ".", ".", ".", "5", ".", ".", "1", "."],
//     [".", "4", ".", "3", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//     ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//     [".", ".", "2", ".", "7", ".", ".", ".", "."],
//     [".", "1", "5", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", "2", ".", ".", "."],
//     [".", "2", ".", "9", ".", ".", ".", ".", "."],
//     [".", ".", "4", ".", ".", ".", ".", ".", "."],
//   ])
// );

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
