// Excercize 15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Solution:

const list_people = ["Muaaz", "Mohsin", "Ali"];
console.log(
  `${list_people[0]} cannot make it to our dinner due to some emergency`
);

list_people[0] = "Rafay";

console.log(`${list_people[0]},Please come at our place for dinner tonight`);
console.log(`${list_people[1]},Please come at our place for dinner tonight`);
console.log(`${list_people[2]},Please come at our place for dinner tonight`);
