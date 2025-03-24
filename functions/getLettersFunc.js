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
    letters.push(
      vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
    );
  }
  for (let i = 1; i < 9; i++) {
    letters.push(
      commonConsonants[
        Math.floor(Math.random() * commonConsonants.length)
      ].toUpperCase()
    );
  }

  return letters;
};

module.exports = getLettersFunc;
