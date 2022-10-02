// Excercize 17:

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Solution:

// PROGRAM 16
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

// PROGRAM 17

// PART 1:
console.log(`I'm Sorry But i can invite only two people for dinner now`);

// PART 2:
console.log(
  `${list_people.pop()}, I am sorry But I can’t invite you to dinner.`
);
console.log(
  `${list_people.pop()}, I am sorry But I can’t invite you to dinner.`
);
console.log(
  `${list_people.pop()}, I am sorry But I can’t invite you to dinner.`
);
console.log(
  `${list_people.pop()}, I am sorry But I can’t invite you to dinner.`
);

// PART 3
console.log(`${list_people[0]},You are Still Invited to the Dinner`);
console.log(`${list_people[1]},You are Still Invited to the Dinner`);

// PART 4:

list_people.pop();
list_people.pop();

console.log(list_people);
