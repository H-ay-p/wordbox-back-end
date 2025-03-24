const getLettersFunc = () => {
  const letters = [];
  const commonConsonants = [
    "r",
    "t",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "l",
    "c",
    "b",
    "n",
    "m",
  ];

  const uncommonConsonants = ["w", "y", "z", "x", "j"];
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 1; i < 9; i++) {
    letters.push(
      vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
    );
  }
  for (let i = 1; i < 8; i++) {
    letters.push(
      commonConsonants[
        Math.floor(Math.random() * commonConsonants.length)
      ].toUpperCase()
    );
  }

  letters.push(
    uncommonConsonants[
      Math.floor(Math.random() * commonConsonants.length)
    ].toUpperCase()
  );
  return letters;
};

module.exports = getLettersFunc;
