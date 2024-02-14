function rearrangeArray(nums: number[]): number[] {
  const [positive, negative] = divideArrayIntoPositiveAndNegative(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      nums[i] = positive[i / 2];
    } else {
      nums[i] = negative[Math.floor(i / 2)];
    }
  }
  return nums;
}

function divideArrayIntoPositiveAndNegative(nums: number[]): number[][] {
  const positive = new Array(nums.length / 2).fill(0);
  const negative = new Array(nums.length / 2).fill(0);
  let negativePointer = 0;
  let positivePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative[negativePointer++] = nums[i];
    } else {
      positive[positivePointer++] = nums[i];
    }
  }
  return [positive, negative];
}

const nums = [-1, 2, -3, -5, 2, 1];
console.log(rearrangeArray(nums));
