//variable scope
//when called at the root of the script it is concidered
//a global scope or global variable  which means the variable can be called
//anywhere in the script

//when you declare a variable inside the function it is concidered
//a local variable or local scope which means it only exists inside the
//function

function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result;  //local scope

	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

var firstFraction = 7/16;  //global scope
var secondFraction = 13/25;  //global scope

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");
