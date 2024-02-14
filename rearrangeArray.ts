function rearrangeArray(nums: number[]): number[] {
  divideArrayIntoPositiveAndNegative(nums);

  const pivot = findPivot(nums);
  const result: number[] = [];

  for (let i = 0; i < pivot; i++) {
    result.push(nums[i]);
    result.push(nums[pivot + i]);
  }

  return result;
}

function swap<T>(nums: Array<T>, a: number, b: number) {
  [nums[b], nums[a]] = [nums[a], nums[b]];
}

function findPivot(nums: number[]) {
  return nums.findIndex((val) => val < 0);
}

function divideArrayIntoPositiveAndNegative(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let count = i;
      while (nums[count] < 0) {
        if (count >= nums.length - 1) {
          return;
        }
        count++;
      }

      while (count != i) {
        swap(nums, count--, count);
      }
    }
  }
}
