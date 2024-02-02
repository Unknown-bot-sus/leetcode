function sequentialDigits(low: number, high: number): number[] {
  let num = "";
  const result: number[] = [];

  for (let i = 1; i <= 9; i++) {
    num = i.toString();
    let val = i;
    if (val >= low && val <= high) {
      result.push(val);
    }
    for (let j = i + 1; j <= 9; j++) {
      num += j;
      const val = Number(num);
      if (val >= low && val <= high) {
        result.push(val);
      }
    }
  }

  return result.sort((a, b) => a - b);
}

// console.log(sequentialDigits(1, 5));
// console.log(sequentialDigits(10, 15));
console.log(sequentialDigits(89, 234));
