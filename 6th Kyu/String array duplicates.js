/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

//Solution

function dup(s) {
  return s.map((w) =>
    [...w].filter((ch, i, arr) => ch !== arr[i + 1]).join("")
  );
}
