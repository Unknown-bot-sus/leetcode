function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = {
    "+": (b: number, a: number) => a + b,
    "-": (b: number, a: number) => a - b,
    "*": (b: number, a: number) => a * b,
    "/": (b: number, a: number) => Math.trunc(a / b),
  };

  for (let token of tokens) {
    if (token in operators) {
      const a = +(stack.pop() ?? 0);
      const b = +(stack.pop() ?? 0);
      stack.push(operators[token](a, b));
    } else {
      stack.push(+token);
    }
  }
  return stack.pop() ?? 0;
}
