/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//Solution

function toCamelCase(str) {
  let arrStr = str.split(/[-_]/g);
  return (
    arrStr[0] +
    arrStr
      .slice(1)
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join("")
  );
}
