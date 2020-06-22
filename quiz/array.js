// 배열을 문자열로 만들기
{
  const fruits = ["아이파크", "코오롱 하늘채", "래미안"];
  // join() 메서드는 배열내 요소를 연결하여 문자열을 만듭니다.
  const result = fruits.join(",");
  console.log(result); // 아이파크,코오롱 하늘채,래미안
}

// 문자열 구분하기
{
  const station = "상월곡,월곡,돌곶이,보문,고려대";
  // split() 메서드는 문자열을 지정된 구분자를 기준으로 각각의 요소로 분류하여 배열로 만듭니다.
  const stationsArr = station.split(",");
  console.log(stationsArr);
}

// 문자열 정렬 순서 변경하기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  // reverse() 메서드는 변경된 배열을 반환합니다.
  console.log(array);
  //  reverse() 메서드는 원본 배열도 변경합니다.
}

// 첫번째, 두번째 요소 제외하고 배열 요소 가져오기
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2); // splice는 원본 배열을 변경.
  const result = array.slice(2, 5); // slice는 원본 배열을 변경하지 않고 새로운 배열을 리턴.
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 점수가 90점인 학생 찾기
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
}

// 등록된 학생 찾기
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 학생의 스코어만 가져오기
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(({ score }) => score);
  console.log(result);
}

// 50점 이하 학생이 있는지 여부 확인하기
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  // 모든 학생이 50점 이하인지 확인하기
  const result = students.every((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {});
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
