const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0]; //min, sec, 100th, 1000th
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
//we're going to use a helper function, and we can use them to augment content in
//other functions
function leadingZero(time)
{
  //checks if time is less than 9 and adds a string 0 to get it looking like "09" instead of "9"
  if (time <= 9)
  {
    time = "0" + time;
  }

  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer()
{
  //set string with timer information
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  //updates timer HTML text to show timer counter
  theTimer.innerHTML = currentTime;
  //increment timer
  timer[3]++;

  //this grabs minutes, 1000/100 = seconds/60 = minutes
  timer[0] = Math.floor((timer[3]/100)/60);
  //this grabs seconds, 1000/100 = seconds, then minus min * 60 so that seconds returns to 0
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  //this grabs 1000th - seconds * 100(to reset everytime we get to 100th of a second)
  //then also subtract minutes * 6000 which is everytime minutes reach 100
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck()
{
  //stores text entered in text area
  let textEntered = testArea.value;
  //substring method treats a string of text as an array allows it to pull out a section of the string
  //and use it as  a substring(where to start, how many characters to return)
  let originTextMatch = originText.substring(0, textEntered.length);

  //test to see if string in test area matches total origin text when test is done
  if (textEntered == originText)
  {
    //stops timer
    clearInterval(interval);
    testWrapper.style.borderColor = "#429890";
  }
  else
  {
      if (textEntered == originTextMatch)
      {
        testWrapper.style.borderColor = "#65CCF3";
      }
      else
      {
        testWrapper.style.borderColor = "#E95D0F";
      }
  }
}

// Start the timer:
function start()
{
  //check if test area is empty
  let textEnteredLength = testArea.value.length;

  //checks if typing has started, then timer starts and counts every
  //1000th of a second
  if (textEnteredLength === 0 && !timerRunning)
  {
    timerRunning = true;
    //starts timer
    interval = setInterval(runTimer, 10);
  }

}

// Reset everything:
function reset()
{
  clearInterval(interval);  //stops timer
  interval = null; //used to use same interval variable so we can restart test
  timer = [0, 0, 0, 0];  //reset timer
  timerRunning = false;  //all to rest test

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
//calls start function to start test on keypress
testArea.addEventListener("keypress", start, false);
//listens for key releases and call function to cross checks with test text
testArea.addEventListener("keyup", spellCheck, false);
//when button is clicked it will call reset function to reset test
resetButton.addEventListener("click", reset, false);
