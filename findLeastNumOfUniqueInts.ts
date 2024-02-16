function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const counter = new Map<number, number>();

  for (let num of arr) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  const frequencies = [...counter.values()].sort((a, b) => a - b);
  for (const [index, count] of frequencies.entries()) {
    console.log(k, count);
    if (k >= count) k = k - count;
    else return frequencies.length - index;
  }

  return 0;
}
