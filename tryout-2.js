// Destructuring

const arrDes = [10, 20, 30, 40, 50];

const [a, b, c, d, e] = arrDes;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// slice in array

let arr = [10, 20, 30, 40, 50, 60];

// const slicedArr = arrSlice.slice()
console.log(arr.join(" "));
console.log(arr.includes(78)); // false
console.log(arr.indexOf(10, 2)); // 5
console.log(); // false

// higher order methods (for each (), map())

const mapped = arr.map((element, index) => {
  return `index: ${index} , value: ${element}`;
});
console.log(mapped);

// for each

const arr1 = [1, 2, 3, 4, 5, 6, , 8];

// console.log(arr1.reverse());
console.log("from console", arr1.length);

const itArr = arr1.forEach((el) => {
  return console.log(el);
});

// let a = "hello"

// console.log(a.split())

let a1 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, placea";
let b1 = a.split();
console.log(a);
console.log(b);

/*
The above returns when map()= [ 1, 2, 3, 4, 5, 6, <1 empty item>, 8 ]
The above returns when filter()= 

*/
