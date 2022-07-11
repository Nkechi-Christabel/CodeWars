/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 

We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

//Solution

function likes(names) {
  let len = names.length;
  let name;

  len === 1
    ? (name = names[0])
    : len === 2
    ? (name = `${names[0]} and ${names[1]}`)
    : len === 3
    ? (name = `${names[0]}, ${names[1]} and ${names[2]}`)
    : len > 3
    ? (name = `${names[0]}, ${names[1]} and ${names.length - 2} others`)
    : (name = "no one");

  return names.length > 1 ? `${name} like this` : `${name} likes this`;
}
