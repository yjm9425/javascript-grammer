let movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

let movieTitles = movies.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue.title] = ++accumulator[currentValue.title] || 1;
    return accumulator;
  },
  { "toy story": 1 }
);

console.log(movieTitles);
/*
  [movieTitles] =>
  {
    toy story:3,
    frozen:1,
    car:1,
    iron man:1
  }
*/
