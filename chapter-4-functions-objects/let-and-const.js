//let and const

// let: block scope variable, smaller scope then var
//const: Constant, can't be changed once defined

//const example:
//name constants with all caps to identify them
const MYCONSTANT = 5;
console.log(MYCONSTANT);
MYCONSTANT = 6;  //fails and errors out or crashes

//let example:
function logScope() {
  var localVar = 2;

  if(localVar)
  {
    var localVar = "I'm different!";
    console.log("nested localVar: ", localVar);
  }
  console.log("logScope localVar: ", localVar);
}

logScope();
