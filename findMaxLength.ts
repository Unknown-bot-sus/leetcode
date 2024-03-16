function findMaxLength(nums: number[]): number {
  let max = 0,
    sum = 0;
  let map = new Map<number, number>();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    if (map.get(sum) !== undefined) {
      max = Math.max(max, i - map.get(sum)!);
    } else {
      map.set(sum, i);
    }
  }

  return max;
}

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
