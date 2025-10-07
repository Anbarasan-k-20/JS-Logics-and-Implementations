const secondLarget = (arr) => {
  let secondLarge = [...new Set(arr)];
  secondLarge.sort((a, b) => a - b);
  if (secondLarge.length < 2) return false;

  return secondLarge[secondLarge.length - 2];
};
// console.log(secondLarget([1, 44, 33]));
