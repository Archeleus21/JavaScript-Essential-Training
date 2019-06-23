/*
//closures - is a function within a function that relies
//on variables in the base function

function doSomeMath()
{
  var a = 5;
  var b = 4;

  function multiply()
  {
    var result = a * b;
    return result
  }
  //return multiply as a variable stores the entire multiply function
  //in theResult
  return multiply;
}

var theResult = doSomeMath();
//if you call theResult as a function it will execute multiply as if it is being called
//if you call theResult as a variable it will return the entire function contents
console.log("The result: ", theResult());
*/

//desired pixel size is 32, normal size is 16,
//divide them and get the 'em' value 32/16 = 2;
function giveMeEms(pixels)
{
  var baseValue = 16;

  function doTheMath()
  {
    return pixels / baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(25);
var xLargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("large size: ", largeSize());
console.log("Extra Large size: ", xLargeSize());
