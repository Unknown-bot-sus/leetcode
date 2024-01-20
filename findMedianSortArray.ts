// export function findMedianSortedArrays(
//   nums1: number[],
//   nums2: number[]
// ): number {
//   let array = [];

//   let leftPointer = 0,
//     rightPointer = 0,
//     index = 0;
//   let totalIndex = nums1.length + nums2.length;

//   while (index <= totalIndex / 2) {
//     if (
//       nums1[leftPointer] <= nums2[rightPointer] &&
//       leftPointer < nums1.length
//     ) {
//       array[index] = nums1[leftPointer];
//       ++leftPointer;
//     } else {
//       array[index] = nums2[rightPointer];
//       ++rightPointer;
//     }
//     ++index;
//   }

//   if (totalIndex % 2 !== 0) {
//     return array[index - 1];
//   }
//   console.log(array);
//   return (array[index - 1] + array[index - 2]) / 2;
// }

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  let leftPointer = 0,
    rightPointer = 0,
    index = 0,
    totalLength = nums1.length + nums2.length,
    currentNum = 0,
    lastNum = 0;

  while (index <= totalLength / 2) {
    if (
      nums1[leftPointer] <= (nums2[rightPointer] ?? Infinity) &&
      leftPointer < nums1.length
    ) {
      lastNum = currentNum;
      currentNum = nums1[leftPointer] ?? 0;
      ++leftPointer;
    } else {
      lastNum = currentNum;
      currentNum = nums2[rightPointer] ?? 0;
      ++rightPointer;
    }
    ++index;
  }

  if (totalLength % 2 !== 0 || index === 1) {
    return currentNum;
  }

  return (currentNum + lastNum) / 2;
}
