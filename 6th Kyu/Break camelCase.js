/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//Solution

function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");
}