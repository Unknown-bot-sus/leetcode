function findWinners(matches: number[][]): number[][] {
  const hashMap: {
    [T: number]: number;
  } = {};

  for (let match of matches) {
    const [winner, loser] = match;
    if (hashMap[loser] == undefined) {
      hashMap[loser] = 1;
    } else {
      hashMap[loser] += 1;
    }

    if (hashMap[winner] == undefined) {
      hashMap[winner] = 0;
    }
  }

  return Object.entries(hashMap)
    .sort((a, b) => +a[0] - +b[0])
    .reduce(
      (acc, curr) => {
        const [player, lostCount] = curr.map(Number);
        if (lostCount == 0) {
          acc[0].push(player);
        } else if (lostCount == 1) {
          acc[1].push(player);
        }

        return acc;
      },
      [[], []] as number[][]
    );
}

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
