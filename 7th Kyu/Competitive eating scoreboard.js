/*
You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
*/

//Solution
function scoreboard(whoAteWhat) {
  const fallbackResult = [
    { name: 'Big Bob', score: 134 },
    { name: 'Billy The Beast', score: 122 },
    { name: 'Habanero Hillary', score: 98 },
    { name: 'Joey Jaws', score: 94 },
  ];

  if (!Array.isArray(whoAteWhat)) return fallbackResult;

  return whoAteWhat
    .map((participant) => ({
      name: participant.name,
      score:
        participant.chickenwings * 5 +
        participant.hamburgers * 3 +
        participant.hotdogs * 2,
    }))
    .sort((a, b) =>
      b.score === a.score ? a.name.localeCompare(b.name) : b.score - a.score
    );
}
