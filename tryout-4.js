// const str = "SAtring";
// console.log(str.charCodeAt(4));
// console.log(str.length - 1);
// // implement date

// const date = new Date();

// console.log(date.getFullYear());

// // Prototype;

// let person = {
//   name: "starboy",
//   age: 21,
//   qual: "Bca",
// };
// console.log(typeof person);

// console.log(person);

// let person2 = Object.create(person);

// console.log(person2);
// console.log(typeof person2);

// let arr2 = [1, 2, 3, 4, 5, 6];

// console.log(typeof arr2);
// console.log(person2.__proto__);

// function Name(params) {
//   return "Hello";
// }
// console.log(Name());
// console.log(typeof Name);

// const li = document.querySelector("ul");

// const log = li.childNodes[2];
// console.log(log);

// Sorting method

// const arr = [1, 2, 33, 22, 98, 65, 33, 1, 0];

// const sorted = arr.sort((a, b) => b - a);
// // console.log(sorted);

// // flatten array using built in function

// const arr1 = [1, 2, 3, 4, 4, 6, 7, 6, 6, 6, [5, 6, 7, 8]];
// let flateddArr = arr1.flat(1);

// function findRepeatedArr(arr) {
//   return [...new Set(arr)];
// }

// // console.log(findRepeatedArr(flateddArr));

// const flat = [1, 2, 3, [2, 2, 3, [33, 2]]];
// let flatten = flat.flat(Infinity);
// console.log(flatten);
// // console.log([...new Set(flatten)]);

// // remove duplicates

// const removeDuplicates = (arr) => {
//   return arr.filter((val, index, array) => {
//     return array.indexOf(val) == index;
//   });
// };
// // console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6, 7, 77, 7, 5, 1]));

// const redusedflatten = flatten.reduce((accumalotor, currentValue, index) => {
//   // console.log("reduseFuntion" + accumalotor);
//   // console.log(currentValue);
//   console.log(index);
// });

// FIND THE LONGEST

const findLongest = (str) => {
  let longestSentance = "";
  const spliStr = str.split(" ");
  for (const char of spliStr) {
    if (char.length > longestSentance.length) {
      longestSentance = char;
    }
  }
  return longestSentance;
};

console.log(findLongest("this is The Longest Sentance"));
