//grab elements with ID
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//get date and time from cpu/web browser
var date = new Date();

//get specific pieces of time from the store Date
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//store positions of hands in degrees
//to calculate the hrs you take the actualy hours then
// divide by 360 for a full circle than by 12 since there are
//12 hours on a clock.
//to update realtime you add the actual minutes times 360 for a full circle
//than divided by 60 for 60 min for a full rotation, then by 12 since the hours
//only are 12 on the clock
let hrPosition = (hr * 360/12) + (min * (360/60)/12);
//first calculate the minute hand like the seconds hand.
//second, in order to update it real time when the seconds increase
//you need to add the seconds then divide that by another 60 since it takes
//60 seconds for the minute hand to move.
let minPosition = (min * 360/60) + (sec * (360/60)/60);
//take the actualy seconds times 360(degrees is a full rotation)
//divided by the amount of seconds in a full rotation which is 60
let secPosition = sec * 360/60;

function runTheClock()
{
  //update in degrees the positions
  //take the actual hour, + 360 for a full circle over 12 hours on a clock
  //divided by how many seconds in 1 hr, which is 3600seconds
  hrPosition += (360/12)/3600;  //simplified to 3/360
  //take actual min + 1 60th (1 spot out of the 60 spots on a clock)
  //times 60 seconds in a min
  minPosition += (1/60) * 60;
  //take actual seconds + 360 for a full circle divided by how many seconds there are
  secPosition += 360/60;

  //set positions/rotations of arms
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
//used like time.deltatime, setInterval(name of function, miliseconds)
var timeInterval = setInterval(runTheClock, 1000);
