let theFavNumber = 7;
// user guess
let guess = Number(prompt("Guess your favorite number:"));

while (guess !== theFavNumber) {  // Loop runs while guess is NOT correct
    if (guess < theFavNumber) {   
        console.log("Too low."); // if gets too low
    } else {                     
        console.log("Too high."); // if gets too high
    }
    guess = Number(prompt("Guess again:")); // Ask again
}

console.log("Correct!"); // will print if the guess is === to thefavnumber
