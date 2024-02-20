function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  const result: number[] = [];

  // getting the count of all nums
  for (let num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  for (let [num, count] of freq) {
    buckets[count].push(num);
  }

  for (let i = buckets.length - 1; i > 0; --i) {
    if (k === result.length) return result;

    result.push(...buckets[i].slice(0, k - result.length));
  }

  return result;
}

console.log(topKFrequent([2, 3, 4, 1, 4, 0, 4, -1, -2, -1], 2));
