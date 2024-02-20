function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sCount = new Map<string, number>(),
    tCount = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    sCount.set(s[i], (sCount.get(s[i]) ?? 0) + 1);

    tCount.set(t[i], (tCount.get(t[i]) ?? 0) + 1);
  }

  return compareMaps(sCount, tCount);
}

function compareMaps<T, K>(m1: Map<T, K>, m2: Map<T, K>) {
  for (let [key, val] of m1) {
    if (m2.get(key) !== val) {
      return false;
    }
  }

  return true;
}
