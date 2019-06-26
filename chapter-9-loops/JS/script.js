
//loopsing arrays
//checks for external links
var extLinks = document.querySelectorAll('a[href^="http"]');

for (var i = 0; i < extLinks.length; i++)
{
  if (!extLinks[i].hasAttribute("target"))
  {
    extLinks[i].setAttribute("target", "_blank");
  }
}

//breaks and continue
//break
//terminates loop

//continue terminates that iteration of the loop then continues on with the rest of the iterations

//example: finding a number by chance
const MIN = 0;
const MAX = 36;

var testNumber = 15;
var i = 1;

while (MAX)
{
  let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

  if (randomValue == testNumber)
  {
    break;//BREAKS THE INFINITE LOOP WHEN CONDITION IS MET
  }

  console.log("Round " + i + ":" + randomValue);
  i++;
}
console.log("The script went "  + i + " rounds before finding " + testNumber + ".");

//example 2: finding prime numbers
const CEILING = 100;

//function to test for prime numbers
function primeTest(testValue)
{
  let isPrime = true;

  for ( let i = 2; i < testValue; i++)
  {
    if (testValue % i === 0)
    {
      isPrime = false;
    }
  }
  return isPrime;
}

//loop to run as many times as CEILING
for (let i = 2; i <= CEILING; i++)
{
  let result = primeTest(i);
  if (result == false)
  {
    continue;
  }
  console.log(i + " is a prime number: " + result);
}
