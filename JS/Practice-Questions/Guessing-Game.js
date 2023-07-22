const max = prompt("What is the maximum number you want to enter?");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess a number between 1 and " + max);

while (true) {
  if (guess.toLowerCase == "quit" || guess.toLowerCase == "exit") {
    alert("Thanks for playing!");
    console.log("Thanks for playing!");
    break;
  } else if (guess == random) {
    alert("Congratulations! You guessed it right! It's " + guess);
    console.log("Congratulations! You guessed it right! It's " + guess);
    break;
  } else if (guess > random) {
    guess = prompt("Too high! Try again!");
  } else if (guess < random) {
    guess = prompt("Too low! Try again!");
  } else {
    guess = prompt("Please enter a number");
  }
}
