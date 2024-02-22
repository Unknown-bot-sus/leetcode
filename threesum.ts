function threeSum(nums: number[]): number[][] {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        --r;
      } else if (sum < 0) {
        ++l;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        ++l;
        while (nums[l] === nums[l - 1] && l < r) {
          ++l;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
