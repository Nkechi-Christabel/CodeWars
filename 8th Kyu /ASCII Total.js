/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

//Solution

function uniTotal(string) {
  return string.split("").reduce((a, b) => a + b.codePointAt(), 0);
}
