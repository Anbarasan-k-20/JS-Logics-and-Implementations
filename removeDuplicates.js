// remove duplicates method 1
// const removeDuplicates1 = (arr) => {
//   return arr.filter((value, index, array) => {
//     return array.indexOf(value) == index;
//   });
// };

// console.log(removeDuplicates1([1, 2, 3, 4, 5, 6, 2, 3, 4, 4, 9, 8]));

/*

return arr.filter((val,index,arr){
 return arr.indexOf(val)==index;
})

*/
// remove duplicates method 2

// const removeDuplicates2 = (arr) => {
//   return [...new Set(arr)];
// };

// console.log(removeDuplicates2([1, 2, 3, 4, 5, 6, 7, 8, 34, 4, 5, 2, 3, 1, 3]));

// let arr = [1, 2, 3, 45, 6.7];

// // Remove dupllicates method 3
// const removeDuplicates3 = (arr) => {
//   return arr.reduce((unique, item) => {
//     return unique.includes(item) ? unique : [...unique, item];
//   }, []);
// };
// console.log(removeDuplicates3([1, 2, 3, 4, 5, 6, 4, 32, 3, 1]));

// remove duplicates

const removedup2 = (arr) => {
  return arr.filter((val, index, totArr) => {
    return totArr.indexOf(val) == index;
  });
};

console.log(removedup2([1, 2, 2, 3, 4, 4, 4, 5]));
