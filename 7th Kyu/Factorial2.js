/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//Solution

function factorial(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) factorial *= i;
  return factorial;
}
