// flatten arr built-in method

const flattenArr = (arr) => {
  return arr.flat(Infinity);
};
console.log(flattenArr([1, 2, 3, [4, 5, [6, 8]]]));

// withOut built-in

const manualFlat = (arr1) => {
  let flattedArr = [];
  arr1.forEach((element) => {
    if (Array.isArray(element)) {
      flattedArr = flattedArr.concat(manualFlat(element));
    } else {
      flattedArr.push(element);
    }
  });
  return flattedArr;
};

console.log(manualFlat([1, 2, [3, 4, [5, [6]]]]));
