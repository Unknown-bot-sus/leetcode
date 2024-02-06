function groupAnagrams(strs: string[]): string[][] {
  const antagram = new Map();

  for (let word of strs) {
    const sorted_word = sortWord(word);
    if (antagram.get(sorted_word) !== undefined) {
      antagram.get(sorted_word).push(word);
    } else {
      antagram.set(sorted_word, [word]);
    }
  }

  return [...antagram.values()];
}

function sortWord(word: string) {
  return word.split("").sort().join("");
}
