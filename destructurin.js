// array destructure swapping

let val1 = 1,
  val2 = 2;
[val1, val2] = [val2, val1];
console.log(val1, val2);

const obj = {
  fName: "name",
  Lname: "Lname",
};

const { nwName, NwLname } = obj;

console.log(nwName);
console.log(NwLname);
