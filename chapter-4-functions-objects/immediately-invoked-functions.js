//Immediately Invoked functions
//variables need to be declared before this function since it runs as soon as it is encountered
var firtsFraction = 5/7;
var secondFraction = 5/9;

//put the ( function() { //code block; } ) (parameters) and definition in parenthesis
//then end with a set of parenthesis
var theBiggest = (function(a,b)
{
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  return result
})(firstFraction, secondFraction))

//now you can just call the variable storing the function
console.log(theBiggest);
