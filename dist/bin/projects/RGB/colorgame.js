let numSquares = 6; // initializes number of squares on the screen
let colors = []; // defines array of colors
let pickedColor; // defines color that's choosen as winner

let squares = document.querySelectorAll(".square"); // select all the square classes
let colorDisplay = document.getElementById("colorDisplay"); // grab the h1 header color display
colorDisplay.textContent = pickedColor; // display winning color as header
let messageDisplay = document.querySelector("#message"); // grabs Try Again/You Win message
let h1 = document.querySelector("h1"); //grabs the h1 block for color change when won game
let resetButton = document.querySelector("#reset"); //grabs reset button
let modeButtons = document.querySelectorAll(".mode"); //grabs easy and hard mode buttons

// initialize
init();

// initialize function
function init() {
  setupModeButtons();
  main();
  reset();
}

function setupModeButtons() {
  // Mode button event listeners
  // if you want to add more difficulty modes in the future, this accounts for buttons more buttons
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected"); // removes selected class
      modeButtons[1].classList.remove("selected"); // removes selected class
      this.classList.add("selected"); // adds selected class to button that's clicked

      //the following does the same as the if/else statement below it. It's called Ternary Operator
      //this.textContent === "Easy" ? (numSquares = 3): (numSquares = 6);
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset(numSquares);
    });
  }
}

function main() {
  // checks to see if win or loss
  // change colors if win or loss
  // loop throught to select each square
  for (let i = 0; i < squares.length; i++) {
    // add click listener to squares
    squares[i].addEventListener("click", function() {
      // compare selected color to pickedColor
      let clickedColor = this.style.backgroundColor;
      // check for wins or loss
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "You Got It!";
        messageDisplay.style.color = pickedColor;
        // call function to change all boxes to same color
        changeColors(clickedColor);
        // change h1 header bg to same winning color
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        // if color is wrong, make it same color as bg or "disappear"
        this.style.backgroundColor = "#232323";
        messageDisplay.style.color = "#000";
        messageDisplay.textContent = "Try Again );";
      }
    });
  }
}

function reset() {
  // initializes colors to random, sets winning color, changes header text,
  // changes number of squares pending difficulty mode

  // generate new random colors
  colors = generateRandomColor(numSquares);
  // pick new winning color
  pickedColor = winningColor();
  // change colorDisplay (RGB codes in h1) to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // sets blocks to appear if going from easy to hard mode or else it won't show lower 3 blocks
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // change header back to default color
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
  // reset the game using the button
  reset();
});

function changeColors(color) {
  // create function to change all the boxes to the same color once you guessed correctly

  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change squares to match winning color
    squares[i].style.backgroundColor = color;
  }
}

function winningColor() {
  // create function to pick a random color in box to be the winning color

  // picks random number 1 to length of array of colors
  // since arrays start at 0 to x, you don't need to add a +1 at the end of Math.random call
  // so then array randomizer will return range from 0 to (colors.length - 1) since Math.random() < 1
  let random = Math.floor(Math.random() * colors.length);
  // returns random color to array set
  return colors[random];
}

function generateRandomColor(num) {
  // create function to generate random colors into an array of size num

  // make an array
  let arr = [];
  // repeate num times
  for (let i = 0; i < num; i++) {
    // insert random color into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // create function that returns ONE random color string: rgb(x, y, z)

  // pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  let g = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
