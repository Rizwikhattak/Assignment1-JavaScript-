// Excercize 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Solution:

const make_great = function (magicianNames) {
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] += " Great";
  }
  return magicianNames;
};
const show_magicians = function (magicianNames) {
  for (const magicianName of magicianNames) console.log(magicianName);
};

const magicianNames = ["ali", "ahmed", "rizwan"];

const copyArray = [...magicianNames];

const newArray = make_great(copyArray);

show_magicians(magicianNames);
show_magicians(newArray);
