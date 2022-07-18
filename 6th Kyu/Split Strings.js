/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//Solution

function solution(str) {
  return (str.length % 2 > 0 ? str + "_" : str).match(/.{2}/g) || [];

  //A shorter version of my solution as seen on codewars
  return (s + "_").match(/.{2}/g) || [];
}
