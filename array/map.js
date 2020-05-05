const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

const movieTitles = movies.map(({ title }) => {
  return title;
});

console.log(movieTitles);
/*
[movieTitles] =>
["toy story", "frozen", "car", "iron man", "toy story"]
   */
