/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//Solution

const reverseSeq = (n) => {
  return [...Array(n)].map((_, i) => i + 1).reverse();
};
