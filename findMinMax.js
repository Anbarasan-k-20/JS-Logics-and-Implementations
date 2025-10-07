const findMinMax = (arr) => {
  let min = arr[0],
    max = arr[0];
  for (let val of arr) {
    if (val < min) min = val;
    if (val > max) max = val;
  }
  return { min, max };
};
console.log(findMinMax([18, 55, 45]));
