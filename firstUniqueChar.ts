function firstUniqChar(s: string): number {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (map.get(letter) === undefined) {
      map.set(letter, i);
    } else {
      map.set(letter, null);
    }
  }

  for (let [_, val] of map) {
    console.log(val);
    if (val !== null) {
      return val;
    }
  }

  return -1;
}

console.log(firstUniqChar("loveleetcode"));
