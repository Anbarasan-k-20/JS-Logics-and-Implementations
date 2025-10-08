// is pallindrom

// function reverseStr(str) {
//   let concat = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     concat += str[i];
//   }
//   console.log(concat);
// }
// reverseStr("isPallindrome");

// // count No Of Char

// function findCount(str) {
//   const charList = { s };
//   for (const char of tr) {
//     if (charList[char]) {
//       charList[char]++;
//     } else {
//       charList[char] = 1;
//     }
//   }
//   return charList;
// }

// console.log(findCount("WordCount"));

// for in and for of loop
// try 1
// let val = "Javascript"

// for( let i = 0 ; i < val.length; i++){
//     console.log(val[i]);
// }

// const arr =[10,20,30,40,50]
// //try-2
// for( let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// try -2 spread Vs rest

// const arr = ["car", "bike", "truck"];
// const arr2 = ["lorry", "ship", "boat"];
// const rest = [...arr, ...arr2];
// rest[2] = "helicopter";
// console.log(arr);
// console.log(arr2);
// console.log(rest);

// const restParam = (...parm) => {
//   console.log(parm);
//   // important notes : rest parameter can be used to access multiple values in the form of array or object
// };
// restParam(1, 2, 3, 4, 5, 6);

// const anagram = (str1, str2) => {
//   str1 = str1.trim().toLowerCase();
//   str2 = str2.trim().toLowerCase();
//   if (str1.length !== str2.length) return false;

//   const container1 = {};
//   const container2 = {};

//   for (const char of str1) {
//     container1[char] = (container1[char] || 0) + 1;
//   }

//   for (const char of str2) {
//     container2[char] = (container2[char] || 0) + 1;
//   }

//   for (const char in container1) {
//     if (container1[char] !== container2[char]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(anagram("rat", "rat"));

function person() {
  name: "name";
  console.log(this);
}

let newPerson = new person();
person();
// console.log(newPerson);

let objPro = {
  a: "hello",
  b: function () {
    console.log(this);
  },
};
console.log(objPro.b);

function Add(a = 1, b = 2) {
  return a + b;
}
console.log(Add());
console.log(Add(4));
console.log(Add(undefined, 10));
