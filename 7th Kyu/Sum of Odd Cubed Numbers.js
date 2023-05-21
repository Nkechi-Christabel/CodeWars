/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

//Solution

function cubeOdd(arr) {
  return arr.some((n) => +n !== n)
    ? undefined
    : arr.map((n) => n ** 3).reduce((a, b) => (a += b % 2 ? b : 0), 0);
}
