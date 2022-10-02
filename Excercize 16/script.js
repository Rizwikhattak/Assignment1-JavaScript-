// Excercize 16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Solution:

const list_people = ["Muaaz", "Mohsin", "Ali"];
console.log(
  `${list_people[0]} we just found a bigger dinning table for more guests`
);
console.log(
  `${list_people[1]} we just found a bigger dinning table for more guests`
);
console.log(
  `${list_people[2]} we just found a bigger dinning table for more guests`
);

list_people.unshift("Rafay");

list_people.splice(2, 0, "Wahab");

list_people.push("Jawad");

console.log(`${list_people[0]},Please come at our place for dinner tonight`);
console.log(`${list_people[1]},Please come at our place for dinner tonight`);
console.log(`${list_people[2]},Please come at our place for dinner tonight`);
console.log(`${list_people[3]},Please come at our place for dinner tonight`);
console.log(`${list_people[4]},Please come at our place for dinner tonight`);
console.log(`${list_people[5]},Please come at our place for dinner tonight`);
