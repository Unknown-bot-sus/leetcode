function numSubarraysWithSum(nums: number[], goal: number): number {
  let left = 0;
  let sum = 0,
    count = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > goal && left <= right) {
      sum -= nums[left];
      ++left;
    }

    let tempLeft = left;
    let tempSum = sum;

    while (tempSum === goal && tempLeft <= right) {
      ++count;
      tempSum -= nums[tempLeft];
      ++tempLeft;
    }
  }

  return count;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
