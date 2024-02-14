function countSubstrings(s: string): number {
  if (s.length === 1) {
    return 1;
  }

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += countSubstrings(s.slice(i + 1, s.length));
    // count += countSubstrings(s.slice(0, s.length - i - 1));
  }

  if (isParlidome(s)) {
    count += 1;
  }

  return count;
}

function isParlidome(s: string) {
  if (s.length === 0) return 0;
  const isOdd = s.length % 2 === 1;
  let middle = Math.floor(s.length / 2);
  if (isOdd) {
    return s.slice(0, middle) === s.slice(middle + 1, s.length);
  }

  return s.slice(0, middle) === s.slice(middle, s.length);
}

console.log(isParlidome("aabaa"));
console.log(countSubstrings("abc"));
