function findFarmland(land: number[][]): number[][] {
  let result = [];
  const row = land.length;
  const col = land[0].length;

  const returnCoord = (i: number, j: number, coord: number[]): number[] => {
    if (i >= row || j >= col || land[i][j] === 0) {
      return [];
    }

    coord[0] = Math.min(i, coord[0]);
    coord[1] = Math.min(j, coord[1]);
    coord[2] = Math.max(i, coord[2]);
    coord[3] = Math.max(j, coord[3]);

    returnCoord(i + 1, j, coord);
    returnCoord(i, j + 1, coord);

    land[i][j] = 0;

    return coord;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (land[i][j] === 1) {
        const coord = returnCoord(i, j, [
          Number.MAX_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER,
          Number.MIN_SAFE_INTEGER,
          Number.MIN_SAFE_INTEGER,
        ]);
        result.push(coord);
      }
    }
  }

  return result;
}

console.log(
  findFarmland([
    [1, 1, 1, 0],
    [1, 1, 1, 0],
  ])
);
