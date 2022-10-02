// Excercize 24:
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Solution:

console.log("rizwan" == "rizwan");
console.log("Rizwan" != "Rizwan");

console.log("Rizwan".toLowerCase() == "rizwan");
console.log("Rizwan".toLowerCase() == "RIzwan");

console.log(12 == 12);
console.log(12 != 12);
console.log(12 > 14);
console.log(12 < 14);
console.log(12 >= 12);
console.log(12 <= 20);

console.log(12 == 12 && 14 >= 16);
console.log(12 == 13 || 13 > 16);

const items = ["Mango", "Banana", "Apple"];
console.log(Array.isArray(items));

const item = "Shampoo";
console.log(Array.isArray(item));
