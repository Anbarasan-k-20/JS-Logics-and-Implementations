// promises
let declarePromise = new Promise((resolve, reject) => {
  let resolveCondition = true;
  if (resolveCondition) {
    resolve("The promide has been Resolved");
  } else {
    reject("The promise has been Rejected");
  }
});

declarePromise
  .then((res) => {
    console.log(res);
    return "This tring is for next .then", res;
  })
  .then((nextRes) => console.log("Next Res", nextRes)) // nested call back with AVOIDING CALL BACK HELL
  .catch((err) => console.log(err));

// LETS TRY WITH CALL BACK HELL !

// function callBackHell(resolveCall, rejectCall) {
//   let condition = true;
//   if (condition) {
//     resolveCall("Resolve called due to conditionn True");
//   } else {
//     rejectCall("Rejected Because of condition fails");
//   }
// }
// //             chain Call back like
// callBackHell(
//   (res) => {
//     console.log(res);
//     // to get Nested Call Back hell
//     callBackHell(
//       (nextRes) => {
//         console.log("Next Resolved Message" + nextRes);
//       },
//       (nextRej) => {
//         console.log("Next Rejected Message" + nextRej);
//       }
//     );
//   },
//   (rej) => {
//     console.log(rej);
//   }
// );
