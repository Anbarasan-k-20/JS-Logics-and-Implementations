// count charecter

const countChar = (str) => {
  const charList = {};
  for (let char of str) {
    if (charList[char]) {
      charList[char] += 1;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
};

console.log(countChar("the values"));
