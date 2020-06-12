// ECMAScript 2015
// hositing : 변수 및 함수 선언은 컴파일 단계에서 메모리에 저장되지만, 코드에서 입력한 위치와 정확히 일치한 곳에 있습니다.
// javascript에서 함수선언을 메모리에 저장하는 방식은 코드에서 선언하기 전에 함수를 사용할 수 있다는 장점이 있습니다.
// hosting은 변수의 선언을 hoist, 초기화는 hoist하지 않습니다.

// 콜백 지옥 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "jake" && password === "qwer1234!") {
        onSuccess(id);
      } else {
        onError(new Error("존재하지 않는 사용자입니다."));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jake") {
        onSuccess({ name: "jake", role: "admin" });
      } else {
        onError(new Error("권한이 없습니다."));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력하세요.");
const password = prompt("password를 입력하세요");

// 문제점
// 1. 가독성이 떨어짐 => 비즈니스로직의 이해하기가 어려워짐.
// 2. debugging이 어렵다.
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`${userWithRole.name}은 ${userWithRole.role} 권한 입니다.`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
