function generate(numRows: number): number[][] {
  const result = new Array(numRows).fill(0);
  result[0] = [1];

  if (numRows === 1) {
    return result;
  }

  result[1] = [1, 1];

  for (let i = 2; i < result.length; i++) {
    const row = new Array(i + 1).fill(0);

    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      const prevRow = result[i - 1];
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    result[i] = row;
  }

  return result;
}

console.log(generate(5));
