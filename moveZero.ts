function moveZeroes(nums: number[]): void {
  let l = nums.length - 2;
  let r = nums.length - 1;

  while (l >= 0) {
    if (nums[l] === 0) {
      swapOrder(nums, l, r);
      r--;
    }
    l--;
  }
}

function swapOrder<T>(arr: Array<T>, a: number, limit: number) {
  if (a >= arr.length - 1 || a > limit) {
    return;
  }

  swap(arr, a, a + 1);

  swapOrder(arr, a + 1, limit);
}

function swap<T>(arr: Array<T>, a: number, b: number) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
