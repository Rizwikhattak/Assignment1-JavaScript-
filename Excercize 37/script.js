// Excercize 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Solution:

function make_shirt(size, textMessage) {
  if (size === 20) {
    console.log(
      `This ${size} is the medium size of the shirt and this ${textMessage} text should be printed upon it`
    );
  } else if (size === 22) {
    console.log(
      `This ${size} is the large size of the shirt and this ${textMessage} text should be printed upon it`
    );
  } else {
    console.log(
      `This ${size} is the size of the shirt and this ${textMessage} text should be printed upon it`
    );
  }
}
make_shirt(20, "I Love JavaScript");
make_shirt(22, "I Love JavaScript");
make_shirt(18, "I Love JavaScript");
