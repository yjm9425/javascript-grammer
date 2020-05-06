const movies = [
  { title: "toy story", name: "woody", genre: "animation" },
  { title: "frozen", name: "elsa", genre: "animation" },
  { title: "car", name: "lightning mcqueen", genre: "animation" },
  { title: "iron man", name: "tony stark", genre: "sf" },
  { title: "toy story", name: "buzz", genre: "animation" },
];

for (const index in movies) {
  console.log(index);
}
/* 
  [index]=>
  0, 1, 2, 3, 4
  */
const frozen = {
  title: "frozen",
  name: "elsa",
  genre: "animation",
};

//  enumerable properties 순환
for (const item in frozen) {
  console.log(frozen[item]);
}
/*
  [frozen[item]]=>
  frozen, elsa, animation
  */
