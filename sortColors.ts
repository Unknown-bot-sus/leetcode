function sortColors(nums: number[]): void {
  const counting = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    counting[nums[i]] += 1;
  }

  let count = 0;
  for (let i = 0; i < counting.length; i++) {
    for (let j = 0; j < counting[i]; j++) {
      console.log(count, i);
      nums[count] = i;
      ++count;
    }
  }
}
const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);

console.log(arr);
