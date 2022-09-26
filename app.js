const input = document.querySelector("#number");
const submit = document.querySelector(".submit");
const info = document.querySelector(".info");
const counterLine = document.querySelector(".counter");

const gameBoard = {
  guessNumber: 0,
  numberToGuess: 0,
  inputNumber: 0,
};

function generateNumber() {
  const guessNum = Math.floor(Math.random() * 100 + 1);
  gameBoard.numberToGuess = guessNum;
  console.log(gameBoard.numberToGuess);
}

generateNumber();

function counter() {
  if (gameBoard.guessNumber >= 0 && gameBoard.guessNumber <= 9) {
    gameBoard.guessNumber++;
    counterLine.innerHTML = gameBoard.guessNumber;
    return;
  } else {
    counterLine.innerHTML = "End of game! you had 10 chances :)";
    return;
  }
}

function inputChecker(input) {
  if (input == gameBoard.numberToGuess) {
    gameBoard.guessNumber = 0;
    info.innerHTML = "You got it! guess the new number !";
    generateNumber();
    console.log(`your new number is : ${gameBoard.numberToGuess}`);
    return;
  }
  if (input > gameBoard.numberToGuess) {
    info.innerHTML = "Too High!";
    counter();
  }
  if (input < gameBoard.numberToGuess) {
    info.innerHTML = "Too Low!";
    counter();
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  inputChecker(input.value);
});
