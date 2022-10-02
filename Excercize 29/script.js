// Excercize 29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Solution:

const favouriteFruits = ["Mango", "Banana", "Apple"];

if (favouriteFruits.includes("Apple"))
  console.log(`You really like ${favouriteFruits[2]}`);
if (favouriteFruits.includes("Mango"))
  console.log(`You really like ${favouriteFruits[0]}`);
if (favouriteFruits.includes("Banana"))
  console.log(`You really like ${favouriteFruits[1]}`);
if (favouriteFruits.includes("Orange")) console.log(`You really Like Orange`);
if (favouriteFruits.includes("Melon")) console.log(`You really like Melon`);
