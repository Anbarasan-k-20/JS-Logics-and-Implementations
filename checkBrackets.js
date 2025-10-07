// const checkParanthesis = (str) => {
//   let paraHold = [];
//   for (let char of str) {
//     if (char == "(") {
//       paraHold.push(char);
//     } else if (char == ")") {
//       if (paraHold.length === 0) return false;
//       paraHold.pop();
//     }
//   }
//   return paraHold.length === 0;
// };
// console.log(checkParanthesis("hey (ho)w)"));

function checkparanthesis(str) {
  let paranthesis = [];
  for (const char of str) {
    if (char == "(") {
      paranthesis.push(char);
    } else if (char == ")") {
      if (paranthesis.length == 0) {
        return false;
      }
      paranthesis.pop();
    }
  }
  return paranthesis.length === 0;
}
console.log(checkparanthesis("hello(())"));
