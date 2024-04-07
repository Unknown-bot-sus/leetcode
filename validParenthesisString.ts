function checkValidString(s: string): boolean {
  let openCount = 0,
    closeCount = 0,
    balance = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const char2 = s[s.length - 1 - i];

    switch (char) {
      case "(":
        openCount++;
        break;
      case ")":
        if (openCount + balance <= 0) {
          return false;
        }
        break;
      case "*":
        balance++;
    }

    switch (char2) {
      case ")":
        closeCount++;
        break;
      case "(":
        if (closeCount + balance <= 0) {
          return false;
        }

        break;
      case "*":
        balance++;
    }
  }

  return true;
}

console.log(
  checkValidString(
    "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
  )
);
