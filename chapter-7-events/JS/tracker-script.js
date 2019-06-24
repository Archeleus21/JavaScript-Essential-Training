const AREA = document.body;
const AREATWO = document.body;
const CIRCLEONE = document.querySelector('.circleOne');
const CIRCLETWO = document.querySelector('.circleTwo');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition = windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLEONE.style.left = horizontalPosition + 'px';
    CIRCLEONE.style.top = verticalPosition + 'px';
}
function mouseCoordinatesTwo(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX + 26;
    var verticalPosition = windowHeight - e.clientY + 26;

    // Set horizontal and vertical position.
    CIRCLETWO.style.left = horizontalPosition + 'px';
    CIRCLETWO.style.top = verticalPosition + 'px';
}


function changeCircleOneColorOnTouch() {
    CIRCLEONE.style.backgroundColor = "green";
    CIRCLEONE.style.borderColor = "green";
}
function changeCircleTwoColorOnTouch() {
  CIRCLETWO.style.backgroundColor = "purple";
  CIRCLETWO.style.borderColor = "purple";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREATWO.addEventListener('mousemove', mouseCoordinatesTwo, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLEONE.addEventListener('mouseenter', changeCircleOneColorOnTouch, false);
CIRCLETWO.addEventListener('mouseenter', changeCircleTwoColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLEONE.addEventListener('mouseleave', function(){CIRCLEONE.removeAttribute("style");}, false);
CIRCLETWO.addEventListener('mouseleave', function(){CIRCLETWO.removeAttribute("style");}, false);
