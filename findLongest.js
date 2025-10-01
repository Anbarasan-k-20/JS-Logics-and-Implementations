// find longest

const findLongest = (sentence) => {
  const splitedSentence = sentence.split(" ");
  let theLongestSentence = "";
  for (let char of splitedSentence) {
    if (char.length > theLongestSentence.length) {
      theLongestSentence = char;
    }
  }
  return theLongestSentence;
};
console.log(
  findLongest(
    "Lorem ipsum, dolor sit amet consecter adipisicing elit. Beatae ea praesentium distinctio dolore"
  )
);
