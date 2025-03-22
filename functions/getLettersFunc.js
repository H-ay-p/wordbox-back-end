const getLettersFunc = () => {
  const letters = [];
  const commonConsonants = [
    "q",
    "w",
    "r",
    "t",
    "y",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "l",
    "z",
    "x",
    "c",
    "b",
    "n",
    "m",
  ];
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 1; i < 9; i++) {
    letters.push(vowels[Math.floor(Math.random() * vowels.length)]);
  }
  for (let i = 1; i < 9; i++) {
    letters.push(
      commonConsonants[Math.floor(Math.random() * commonConsonants.length)]
    );
  }

  return letters;
};

module.exports = getLettersFunc;
