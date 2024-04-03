function isIsomorphic(s: string, t: string): boolean {
  const hash: {
    [index: string]: string;
  } = {};
  const hash2: {
    [index: string]: string;
  } = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    if (hash[char1]) {
      if (hash[char1] !== char2) {
        return false;
      }
    }

    if (hash2[char2]) {
      if (hash2[char2] !== char1) {
        return false;
      }
    }

    hash[char1] = char2;
    hash2[char2] = char1;
  }

  return true;
}

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
