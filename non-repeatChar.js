const nonRepeatChar = (str) => {
  const container = {};
  for (const char of str) {
    if (container[char]) {
      container[char] += 1;
    } else {
      container[char] = 1;
    }
  }
  for (char of str) {
    if (container[char] == 1) {
      return char;
    }
  }
  return null;
};

console.log(nonRepeatChar("chocholate"));

let a = { hello: "hell" };
console.log(typeof a);
