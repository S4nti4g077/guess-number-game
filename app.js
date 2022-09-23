const input = document.querySelector("#form");
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
  if (gameBoard.guessNumber >= 0 && gameBoard.guessNumber <= 10) {
    gameBoard.guessNumber++;
    console.log(gameBoard.guessNumber);
    return;
  } else {
    console.log("finish of game");
  }
}

function inputChecker(input) {
  if (input === gameBoard.numberToGuess) {
    console.log("you got it!!");
  }
  if (input > gameBoard.numberToGuess) {
    console.log("Too high!");
  }
  if (input < gameBoard.numberToGuess) {
    console.log("Too low!");
  }
}
