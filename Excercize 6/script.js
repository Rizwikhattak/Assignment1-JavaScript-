// Excercize 6:
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Solution:
const myName = "  \t Muhammad\t\nRizwan   ";
console.log(myName.trim().split("\t")[0] + myName.trim().split("\n")[1]);
