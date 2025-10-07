// const nonRepeatChar = (str) => {
//   const container = {};
//   for (const char of str) {
//     if (container[char]) {
//       container[char] += 1;
//     } else {
//       container[char] = 1;
//     }
//   }
//   for (char of str) {
//     if (container[char] == 1) {
//       return char;
//     }
//   }
//   return null;
// };

// console.log(nonRepeatChar("chocholate"));

//

const nonrepeat = (str) => {
  let nonrepate = {};
  for (const char of str) {
    if (nonrepate[char]) {
      nonrepate[char] += 1;
    } else {
      nonrepate[char] = 1;
    }
  }
  for (const char of str) {
    if (nonrepate[char] == 1) {
      return char;
    }
  }
  return null;
};

console.log(nonrepeat("coconut"));
