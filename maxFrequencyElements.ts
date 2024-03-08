function maxFrequencyElements(nums: number[]): number {
  const frequency = new Map<number, number>();

  for (let num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const sortedFreq = [...frequency.values()].sort((a, b) => b - a);
  let count = sortedFreq[0] ?? 0;
  for (let i = 0; i < sortedFreq.length - 1; i++) {
    if (sortedFreq[i] === sortedFreq[i + 1]) {
      count += sortedFreq[i];
    } else {
      break;
    }
  }

  return count;
}

maxFrequencyElements([1, 1, 2, 3, 2]);
