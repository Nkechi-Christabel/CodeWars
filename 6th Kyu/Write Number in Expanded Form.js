/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

//Solution
function expandedForm(num) {
  let placeVal = [
    10000000000000, 1000000000000, 100000000000, 10000000000, 1000000000,
    100000000, 10000000, 1000000, 100000, 10000, 1000, 100, 10, 1,
  ].reverse();
  return num
    .toString()
    .split("")
    .reverse()
    .reduce((a, b, i) => {
      +b * placeVal[i] > 0 && a.push(+b * placeVal[i]);
      return a;
    }, [])
    .reverse()
    .join(" + ");

  //Short version on codewars
  num
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
}
