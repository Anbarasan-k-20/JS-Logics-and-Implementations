// this

console.log(this);

const obj = {
  fName: "Anbu",
  ReturnVal: () => {
    return this.fName;
  },
};
console.log(obj.ReturnVal());
