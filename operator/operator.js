// equality
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log({} == false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// list of falsy
(""); // Empty string
null; // null
undefined; // undefined, which you get when doing: var a;
false; // Boolean false
0; // Number 0
NaN; // Not A Number eg: "a" * 2

// list of falsy 를 부정하면 true를 얻을 수 있다.
!"" === true;
!null === true;
!undefined === true;
!0 === true;
!NaN === true;

// 참값을 부정하면 false를 얻을 수 있다.
!"hello" === false;
!1 === false;

// undefined는 false와 같지 않다.
undefined === false; // false
undefined == false; // false

// undefind와 null은 == 연산에서 true 값을 갖는다.
undefined == null; // true
