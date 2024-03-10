function intersection(nums1: number[], nums2: number[]): number[] {
  nums2 = nums2.sort((a, b) => a - b);
  const result = [];
  const hash = new Map<number, number>();

  for (let i = 0; i < nums1.length; i++) {
    if (hash.get(nums1[i]) !== undefined) {
      continue;
    }
    if (binarySearch(nums2, nums1[i]) !== -1) {
      result.push(nums1[i]);
      hash.set(nums1[i], 1);
    }
  }

  return result;
}

function binarySearch(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
