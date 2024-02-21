function longestConsecutive(nums: number[]): number {
  let maxScore = 0;

  const numSet = new Set(nums);

  const isStreak = (numSet: Set<number>, num: number) => numSet.has(num + 1);

  for (let num of numSet) {
    const prevNum = num - 1;
    if (numSet.has(prevNum)) continue;

    let curNum = num;
    let score = 1;

    while (isStreak(numSet, curNum)) {
      ++curNum;
      ++score;
    }

    maxScore = Math.max(score, maxScore);
  }

  return maxScore;
}
