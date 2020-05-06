const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

let animations = [];
for (let i = 0; i < movies.length; i++) {
  animations.push(movies[i]);
}

console.log(animations);
/*
  [animations] =>
  [{title: "toy story", name: "woody", genre: "animation"},
   {title: "frozen", name: "elsa", genre: "animation"},
   {title: "car", name: "lightning mcqueen", genre: "animation"},
   {title: "iron man", name: "tony stark", genre: "sf"},
   {title: "toy story", name: "buzz", genre: "animation"}]
*/
