let obj1 = {
  name: "Name",
  age: 21,
  isAlive: true,
};

let obj2 = { ...obj1 }; // while creating with this ...Rest operator the shallowcopy can be prevented
obj2.age = 20;
console.log(obj1);
console.log(obj2);
obj2.isAlive = false;
const obj3 = JSON.stringify(obj1);
obj2.name = "starBoy";
console.log(obj3);

const deepCopyUsingJSON = JSON.parse(JSON.stringify(obj2));

console.log(deepCopyUsingJSON);
