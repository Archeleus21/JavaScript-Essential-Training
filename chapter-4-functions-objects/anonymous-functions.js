//anonymous functions
//variables
var a = 5/7
var b = 18/25;
//anonymous function
var theBiggest = function()
{
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  //console.log(result);
  return result
}
//call theBiggest variable like a function
//theBiggest();
//or
console.log(theBiggest());

//parameters
var theBiggest = function(a,b)
{
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  //console.log(result);
  return result
}
//call theBiggest variable like a function
//theBiggest(5/7, 4/91);
//or
console.log(theBiggest(5/7, 4/91));

//if you call just the variable you will get the function definition
console.log(theBiggest);
