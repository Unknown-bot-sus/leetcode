function isPalindrome(s: string): boolean {
  s = getOnlyAlphabetAndNumeric(s).toLowerCase();
  const middle = Math.floor(s.length / 2);

  for (let i = 0; i < middle; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }

  return true;
}

function getOnlyAlphabetAndNumeric(s: string): string {
  return s.replace(/[^a-z0-9]/gi, "");
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
