//toggle book now button
//gets the elements and store them in a constant
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");
//remove the hide class from CTA
CTA.classList.remove("hide");
//add the hide class to ALERT
ALERT.classList.add("hide");

//build a function to toggle hide on and Off
//to prevent default links from being ran you need to throw and exception
//put a parameter of 'e' in the function then use that to
//'preventDefault()' from running
function reveal(current)
{
  //need to pass the 'e' as an parameter in the anonymous function
  e.preventDefault();

  current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!";

  ALERT.classList.toggle("hide");
}
/*
//get the element to create the event for
//we leave the '()' off the function to ensure that it
//does no run on loading the page
CTA.onclick = reveal;
//if this second event is added it takes precedence over the first one
//and prevents the first one from running.
CTA.onclick = console.log("The button was clicked!");
*/
//to fix the issue about we use an 'event listener'
//.addEventListener("event", "function", true/false)
//false if it is a specific element such as an achor, true if it is not specific such as the document
CTA.addEventListener("click", function(e){ reveal(e, this); }, false); //'this' refers to the 'current' parameter
CTA.addEventListener("click", function(){console.log("The button was clicked!");}, false);
