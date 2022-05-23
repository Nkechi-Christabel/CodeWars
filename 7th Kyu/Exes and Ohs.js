/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//Solution
function XO(str) {
  //code here

  const lowercaseStr = str.toLowerCase();
  let numberofX = 0,
    numberofO = 0;

  for (let i = 0; i < str.length; i++) {
    if (lowercaseStr[i] === "x") numberofX++;
    if (lowercaseStr[i] === "o") numberofO++;
  }

  return numberofX === numberofO;
}
