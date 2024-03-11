function customSortString(order: string, s: string): string {
  const count = new Map<string, number>();

  for (let char of s) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }

  let resultStr = "";
  for (let char of order) {
    if (count.get(char) !== undefined) {
      resultStr += char.repeat(count.get(char)!);
    }
  }

  for (let char of s) {
    if (order.includes(char)) {
      continue;
    }

    resultStr += char;
  }

  return resultStr;
}

console.log(customSortString("cba", "abcd"));
console.log(customSortString("kqep", "pekeq"));
