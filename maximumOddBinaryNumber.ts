function maximumOddBinaryNumber(s: string): string {
  const countOf1 = s.match(/1/g)!.length;
  return "1".repeat(countOf1 - 1) + "0".repeat(s.length - countOf1) + "1";
}

console.log(maximumOddBinaryNumber("010"));
