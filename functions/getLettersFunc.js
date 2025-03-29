// const getLettersFunc = () => {
//   const letters = [];
//   const commonConsonants = [
//     "r",
//     "t",
//     "p",
//     "s",
//     "d",
//     "f",
//     "g",
//     "h",
//     "l",
//     "c",
//     "b",
//     "n",
//     "m",
//   ];

//   const uncommonConsonants = ["w", "y", "z", "x", "j"];
//   const vowels = ["a", "e", "i", "o", "u"];

//   for (let i = 1; i < 9; i++) {
//     letters.push(
//       vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
//     );
//   }
//   for (let i = 1; i < 8; i++) {
//     letters.push(
//       commonConsonants[
//         Math.floor(Math.random() * commonConsonants.length)
//       ].toUpperCase()
//     );
//   }

//   letters.push(
//     uncommonConsonants[
//       Math.floor(Math.random() * commonConsonants.length)
//     ].toUpperCase()
//   );
//   return letters;
// };
const wordsFile = require("../words/four.json");

const getLettersFunc = () => {
  const letters = [];
  const words = wordsFile.words.split(" ");

  for (let i = 1; i < 5; i++) {
    letters.push(words[Math.floor(Math.random() * words.length)]);
  }

  const strLetters = letters.join("");
  const arrLetters = strLetters.split("");
  arrLetters.sort();
  return arrLetters;
};

module.exports = getLettersFunc;
