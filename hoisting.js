// hoisted funtion

hoist1(); // hoisted🚩
function hoist1() {
  console.log("from funtion 1");
}
hoist2(); // hoisting cant able to do because of assingned
let hoist2 = function () {
  console.log("From hoist 2");
};
// normal CALL
// hoist2();
