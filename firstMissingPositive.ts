function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    while (num > 0 && num < nums.length && num !== nums[num - 1]) {
      swap(nums, i, num - 1);
      num = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length + 1;
}

function swap(nums: number[], a: number, b: number): void {
  const temp = nums[a];

  nums[a] = nums[b];
  nums[b] = temp;
}

// console.log(firstMissingPositive([1, 2, 3, 4]) === 5);
// console.log(firstMissingPositive([2, 3, 4, 5]) === 1);
console.log(firstMissingPositive([3, 4, -1, 1]));
