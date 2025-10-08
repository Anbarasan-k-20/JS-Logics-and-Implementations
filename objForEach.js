const cars = {
  name: "volksWogen",
  price: "20 L",
  model: 2020,
};
// WE DONT USE FOR EACH ON OBJ INSTEAD USE
for (const key in cars) {
  console.log(cars[key]);
}

let a = function () {};
console.log(a.prototype);
