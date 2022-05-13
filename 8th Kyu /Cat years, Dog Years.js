/* Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

//Solution

var humanYearsCatYearsDogYears = (humanYears) => {
  let catDog1 = 15,
    catDog2 = 9,
    catMore = 4,
    dogMore = 5;
  let catYears = 0,
    dogYears = 0;
  if (humanYears === 1) {
    catYears = catDog1;
    dogYears = catDog1;
  } else if (humanYears === 2) {
    catYears = catDog1 + catDog2;
    dogYears = catDog1 + catDog2;
  } else if (humanYears > 2) {
    catYears = catDog1 + catDog2 + (humanYears - 2) * catMore;
    dogYears = catDog1 + catDog2 + (humanYears - 2) * dogMore;
  }
  return [humanYears, catYears, dogYears];
};
