function divideArray(nums: number[], k: number): number[][] {
  if (nums.length % 3 !== 0) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);
  const result: number[][] = Array.from({ length: nums.length / 3 }, () => []);
  for (let i = 0; i < nums.length; i += 3) {
    if (
      nums[i + 2] - nums[i + 1] > k ||
      nums[i + 1] - nums[i] > k ||
      nums[i + 2] - nums[i] > k
    ) {
      return [];
    }
    result[i / 3] = [nums[i], nums[i + 1], nums[i + 2]];
  }

  return result;
}
console.log(
  divideArray([33, 26, 4, 18, 16, 24, 24, 15, 8, 18, 34, 20, 24, 16, 3], 16)
);
