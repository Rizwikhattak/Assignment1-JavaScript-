// Excercize 44:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Solution:

const items = function (...sandwichItems) {
  console.log(`Make a sandwich that includes following items: `);

  for (const [i, item] of sandwichItems.entries()) {
    console.log(`${i + 1}:${item}`);
  }
};

const item1 = ["anda", "kabab"];
const item2 = ["anda", "kabab", "cheese"];
const item3 = ["chicken", "cheese", "anda", "kabab"];

items(...item1);
items(...item2);
items(...item3);
