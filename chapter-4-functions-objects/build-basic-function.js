//named Function
//fractions
//write function definition
/*
function findBiggestFraction()
{
  //condition if(?) true else false
  a > b ? console.log("a: ", a) : console.log("b: ", b);
  console.log("The function is running!");
}

//fractions, define used variable before call
var a = 3/4;
var b = 5/6;

//call function
findBiggestFraction();
*/
/*
//using paramters
function findBiggestFraction(a,b)
{
  //condition if(?) true else false
  a > b ? console.log("a: ", a) : console.log("b: ", b);
}

//set arguments
var firstFraction = 3/4;
var secondFraction = 5/7;
findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(7/16, 13/25);
findBiggestFraction(1/2, 3/4);
*/

//returning a value
function findBiggestFraction(a,b)
{
  //store result
  var result;
  //condition if(?) true else false
  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  //return stored value
  return result;
}

//set arguments
var firstFraction = 3/4;
var secondFraction = 5/7;

console.log(findBiggestFraction(firstFraction, secondFraction));
//or
var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResult);
//or
console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest fraction!");
