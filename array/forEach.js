const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

let animations = [];
movies.forEach((movie) => {
  if (movie.genre === "animation") {
    animations.push(movie);
  }
});

console.log(animations);
/*
[{title: "toy story", name: "woody", genre: "animation"},
 {title: "frozen", name: "elsa", genre: "animation"},
 {title: "car", name: "lightning mcqueen", genre: "animation"},
 {title: "toy story", name: "buzz", genre: "animation"}]
     */
