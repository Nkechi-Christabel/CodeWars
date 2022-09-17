/*
DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

//Solution

function divCon(x) {
  return (
    x.filter((n) => typeof n === "number").reduce((a, b) => a + b, 0) -
    x.filter((n) => typeof n === "string").reduce((a, b) => a + +b, 0)
  );
}
