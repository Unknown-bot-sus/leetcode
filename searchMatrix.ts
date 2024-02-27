function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0,
    bottom = matrix.length - 1;

  while (top <= bottom) {
    const middle = Math.floor((top + bottom) / 2);
    const row = matrix[middle];
    if (target > row[row.length - 1]) {
      top = middle + 1;
    } else if (target < row[0]) {
      bottom = middle - 1;
    } else {
      break;
    }
  }

  if (top > bottom) return false;

  const middle = Math.floor((top + bottom) / 2);
  const row = matrix[middle];

  return binarySearch(row, target) !== -1;
}

function binarySearch(arr: number[], val: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
