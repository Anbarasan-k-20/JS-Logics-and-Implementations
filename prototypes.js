// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const newPerson = new Person("Anbu", "starBoy");
// console.log(newPerson);

// Person.prototype.greeting = function () {
//   return "hello This is prototype";
// };

const fruits = {
  fruitName: "Apple",
  price: 500,
  color: "red",
};

console.log(fruits);

const getFruits = Object.create(fruits);
console.log(getFruits);

function prototype(name, age) {
  name = this.name;
  age = this.age;
  return name, age;
}
const pro2 = new prototype();
console.log(typeof prototype);
