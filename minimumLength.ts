function minimumLength(s: string): number {
  let left = 0,
    right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const char = s[left];

    while (left <= right && s[left] === char) {
      ++left;
    }

    while (right >= left && s[right] === char) {
      --right;
    }
  }
  console.log(right, left);

  return right - left + 1;
}

console.log(minimumLength("abbbbbbbbbbbbbbbbbbba"));
// console.log(minimumLength("aa"));

// console.log(minimumLength("aca"));

// console.log(minimumLength("ca"));
// console.log(minimumLength("cabaabac"));
// console.log(minimumLength("abbbbbbbbbbbbbbbbbbba"));
// console.log(minimumLength("abbbbbbbbbbbbbbbbbbba"));
// console.log(
//   minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb")
// );
