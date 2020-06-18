// 배열을 문자열로 만들기
{
  const fruits = ["아이파크", "코오롱 하늘채", "래미안"];
  // join() 메서드는 배열내 요소를 연결하여 문자열을 만듭니다.
  const result = fruits.join(",");
  console.log(result); // 아이파크,코오롱 하늘채,래미안
}

{
  const station = "상월곡,월곡,돌곶이,보문,고려대";
  // split() 메서드는 문자열을 지정된 구분자를 기준으로 각각의 요소로 분류하여 배열로 만듭니다.
  const stationsArr = station.split(",");
  console.log(stationsArr);
}
