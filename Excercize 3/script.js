// Excercize 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Solution:

const myName = "rizwan";

console.log(
  myName.toUpperCase(),
  myName.toLowerCase(),
  myName.charAt(0).toUpperCase() + myName.slice(1)
);
