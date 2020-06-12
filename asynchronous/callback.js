// hositing: var, function등이 자동적으로 선언부로 올리감. (TODO: 언제부터인지 필요)
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
