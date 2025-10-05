// const findMissingNum = (arr) => {
//   const lor = arr.length + 1;
//   const sumOfNum = (lor * (lor + 1)) / 2;
//   const sumOfArr = arr.reduce((acc, value) => acc + value);

//   return sumOfNum - sumOfArr;
// };

// console.log(findMissingNum([1, 2, 3, 4, 6, 7]));

const missingNum = (arr) => {
  const n = arr.length + 1;
  const fracOfarr = (n * (n + 1)) / 2;
  const sumOfArr = arr.reduce((acc, val) => acc + val);
  return fracOfarr - sumOfArr;
};

console.log(missingNum([1, 2, 3, 4, 5, 7]));
