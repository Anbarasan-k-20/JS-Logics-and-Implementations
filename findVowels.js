// function findVowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelList = {};
//   for (let vowel of vowels) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//       if (char == vowel) {
//         count++;
//       }
//     }
//     vowelList[vowel] = count;
//   }
//   return vowelList;
// }
// console.log(findVowels("is this vowels"));

// function findVowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelsList = {};
//   for (let vowel of vowels) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//       if (char == vowel) {
//         count++;
//       }
//     }
//     vowelsList[vowel] = count;
//   }
//   return vowelsList;
// }
// console.log(findVowels("Find the vowel of these"));

const removeVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelList = "";
  for (const char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      vowelList += char;
    }
  }
  return vowelList;
};
console.log(removeVowels("is these Are Vowels"));
