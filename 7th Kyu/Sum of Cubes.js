/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

//Solution

function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (a, b) => a + b ** 3,
    0
  );

  //Or
  ((n * (n + 1)) / 2) ** 2;
  [...Array(n + 1).keys()].reduce((a, b) => a + b ** 3, 0);
}
