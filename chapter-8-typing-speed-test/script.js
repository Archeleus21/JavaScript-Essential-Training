const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
fuction spellCheck()
{
  //stores text entered in text area
  let textEntered = textarea.value;
}

// Start the timer:
function start()
{
  //check if test area is empty
  let textEnteredLength = testArea.value.length;
}

// Reset everything:
function reset()
{
  console.log("reset button pressed!");
}

// Event listeners for keyboard input and the reset button:
//calls start function to start test on keypress
testArea.addEventListener("keypress", start, false);
//listens for key releases and call function to cross checks with test text
testArea.addEventListener("keyup", spellCheck, false);
//when button is clicked it will call reset function to reset test
resetButton.addEventListener("click", reset, false);
