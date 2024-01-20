function threeSum(nums: number[]): number[][] {
  let result = [];
  nums.sort();

  for (let i = 0; i < nums.length; ++i) {
    // Never let i refer to the same value twice to avoid duplicates.
    if (i != 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] == 0) {
        result.push([nums[i], nums[j], nums[k]]);
        ++j;
        // Never let j refer to the same value twice (in an result) to avoid duplicates
        while (j < k && nums[j] == nums[j - 1]) ++j;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        ++j;
      } else {
        --k;
      }
    }
  }

  return result;
}

function threeSum2(nums: number[]): number[][] {
  let result = [];
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let p = i + 1,
      j = nums.length - 1;
    while (p < j) {
      if (nums[p] + nums[j] + nums[i] === 0) {
        result.push([nums[p], nums[j], nums[i]]);

        while (p + 1 < j && nums[p] === nums[p + 1]) {
          ++p;
        }

        while (j - 1 > p && nums[j] === nums[j - 1]) {
          --j;
        }
        ++p;
        --j;
      } else if (nums[p] + nums[j] + nums[i] < 0) {
        ++p;
      } else {
        --j;
      }
    }

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      ++i;
    }
  }

  return result;
}
