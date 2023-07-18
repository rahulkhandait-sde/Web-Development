let favmovie = "3 idiots";
guess = prompt("Guess my favorite movie");

while (guess != favmovie) {
    if (guess == "quit") {
        guess = alert("You quit! Goodbye!");
        break;
    }
    guess = prompt("Wrong guess! Please try again");
}
if (guess == favmovie) {
    alert("You got it! Congratulations!");
}
