function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length).fill(null);
  let left = 0,
    right = result.length - 1;

  for (let i = result.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }

  return result;
}
