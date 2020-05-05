const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

const animations = movies.filter((movie) => {
  return movie.genre === "animation";
});

console.log(animations);
/*
[animations] =>
[{title: "toy story", name: "woody", genre: "animation"},
 {title: "frozen", name: "elsa", genre: "animation"},
 {title: "car", name: "lightning mcqueen", genre: "animation"},
 {title: "toy story", name: "buzz", genre: "animation"}]
 */
