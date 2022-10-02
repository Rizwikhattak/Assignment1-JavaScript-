// Excercize 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Solution:

const make_great = function (magicianNames) {
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] += " Great";
  }
  return magicianNames;
};
const show_magicians = function (magicianNames) {
  const modifiedMagicianNames = make_great(magicianNames);
  for (const magicianName of modifiedMagicianNames) console.log(magicianName);
};

const magicianNames = ["ali", "ahmed", "rizwan"];

show_magicians(magicianNames);
