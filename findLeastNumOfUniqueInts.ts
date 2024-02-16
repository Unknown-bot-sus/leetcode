function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const counter = new Map<number, number>();

  for (let num of arr) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  const set = new Set(arr);

  const sortedCount = [...counter].sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < k; ) {
    const row = sortedCount[i];

    if (row[1] === 1) {
      set.delete(row[0]);

      ++i;
    } else {
      row[1] = row[1] - 1;
      --k;
    }
  }

  return set.size;
}
