// reverse a string

const reverseStr = (str) => {
  let concat = "";
  for (let i = str.length - 1; i >= 0; i--) {
    concat += str[i];
  }
  return concat;
};
