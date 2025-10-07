function mergeArr(arr1, arr2) {
  let mergedArr = [];
  let index = 0;

  for (let i = 0; i < arr1.length; i++) {
    mergedArr[index] = arr1[i];
    index++;
  }

  for (let j = 0; j < arr2.length; j++) {
    mergedArr[index] = arr2[j];
    index++;
  }
  return mergedArr;
}

console.log(mergeArr([1, 2, 3, 4], [5, 6, 7, 8]));

// const merge = (arr1, arr2) => {
//   const mergedArr = arr1.join(arr2);
// };
// console.log(merge([1, 2, 3], [4, 5, 6]));
