const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

// iterable 순환
for (const item of movies) {
  console.log(item);
}

/* 
  [item]=>
  {title: "toy story", name: "woody", genre: "animation"}
  {title: "frozen", name: "elsa", genre: "animation"}
  {title: "car", name: "lightning mcqueen", genre: "animation"}
  {title: "iron man", name: "tony stark", genre: "sf"}
  {title: "toy story", name: "buzz", genre: "animation"}
  */
