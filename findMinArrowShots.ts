function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) {
    return 0;
  }

  let arrows = 1;
  points.sort((a, b) => a[0] - b[0]);
  let minEnd = points[0][1];
  for (const [start, end] of points) {
    if (start <= minEnd) {
      minEnd = Math.min(end, minEnd);
    } else {
      ++arrows;
      minEnd = end;
    }
  }
  return arrows;
}

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);

console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
