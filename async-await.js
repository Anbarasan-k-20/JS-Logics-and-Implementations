let testPromise = new Promise((resolve, reject) => {
  //   let condition = true;
  //   if (condition) {
  //     resolve("Resolved");
  //   } else {
  //     reject("rejcted");
  //   }

  setTimeout(() => {
    resolve("function resolved");
  }, 3000);
});
console.log("one");

let resolveThen = await testPromise;

console.log(resolveThen);

console.log("three");

console.log(typeof newPromise);
console.log(typeof resolveThen);
