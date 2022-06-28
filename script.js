"use strict";

// Variable declarations
const location1 = 3;
const location2 = 4;
const location3 = 5;
let guess;
let numberOfHits = 0;
let numberOfGuesses = 0;
let isSunk = false;
let stats = "";

while (isSunk == false) {
  guess = Number(prompt(`Ready, Aim, Fire! (Pick a number between 0-6)`));
  if (guess < 0 || guess > 6) {
    alert(`Please enter a valid cell number!`);
  } else {
    numberOfGuesses++;
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!");
      numberOfHits++;
      if (numberOfHits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

stats = `You took ${numberOfGuesses} guesses to sink the battleship, which means your shooting accruracy was ${
  3 / numberOfGuesses
}`;
alert(stats);
