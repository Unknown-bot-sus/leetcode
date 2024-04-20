function timeRequiredToBuy(tickets: number[], k: number): number {
  for (let i = 0; i < tickets.length; i++) {
    if (i > k) {
      tickets[i] = Math.min(tickets[i], tickets[k] - 1);
    } else {
      tickets[i] = Math.min(tickets[i], tickets[k]);
    }
  }

  const sum = tickets.reduce((acc, cur) => acc + cur, 0);

  return sum;
}

console.log(timeRequiredToBuy([2, 3, 2], 2) === 6);
console.log(timeRequiredToBuy([5, 1, 1, 1], 0) === 8);
console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3) === 154);
