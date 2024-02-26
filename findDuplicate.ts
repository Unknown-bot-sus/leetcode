function findDuplicate(nums: number[]): number {
  let slow = nums[0],
    fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let start = 0;

  while (start !== slow) {
    start = nums[start];
    slow = nums[slow];
  }

  return start;
}

// console.log(findDuplicate([1, 2, 3, 4, 4]));

console.log(findDuplicate([3, 1, 3, 4, 2]));

/**
0    3    4
3 -> 4 -> 2 -> 3 -> 4 -> 2
 */
