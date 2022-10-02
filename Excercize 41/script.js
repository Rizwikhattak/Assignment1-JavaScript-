// Excercize 41:
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Solution:

const show_magicians = function (magicianNames) {
  for (const magicianName of magicianNames) console.log(magicianName);
};

const magicianNames = ["ali", "ahmed", "rizwan"];

show_magicians(magicianNames);
