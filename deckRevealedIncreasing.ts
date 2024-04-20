function deckRevealedIncreasing(deck: number[]): number[] {
  deck = deck.sort((a, b) => b - a);
  const queue = [deck[0]];

  for (let card of deck) {
    if (queue[0] === card) {
      continue;
    }
    console.log(queue);

    const temp = queue.pop()!;
    queue.unshift(temp);
    queue.unshift(card);
  }

  return queue;
}

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
