const isPalindrome = (str) => {
  const reverseStr = (s) => {
    let concat = "";
    for (let i = str.length - 1; i >= 0; i--) {
      concat += str[i];
    }
    return concat;
  };
  const cleanedstr = str.toLowerCase();
  return cleanedstr == reverseStr(cleanedstr);
};
console.log(isPalindrome("madam"));
