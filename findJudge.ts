function findJudge(n: number, trust: number[][]): number {
  const countTable = new Map<number, number>();
  const trustTable = new Map<number, boolean>();

  for (let relation of trust) {
    const [naive, trusted] = relation;
    countTable.set(trusted, (countTable.get(trusted) ?? 0) + 1);
    trustTable.set(naive, true);
  }

  const countList = [...countTable].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < countList.length; i++) {
    const [person, count] = countList[i];
    if (count < n - 1) {
      return -1;
    }

    if (trustTable.get(person) === undefined) {
      return person;
    }
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
