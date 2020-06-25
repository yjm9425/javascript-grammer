"use strict";
// promise: 비동기 동작 자바스크립트 object
// state: pending(처리중) -> fulfiled(완료) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // 작업 (network, file I/O..)
  // promise 생성시 작업은 바로 실행된다. callback 함수를 바로 실행
  console.log("작업");
  setTimeout(() => {
    // resolve("완료");
    // javascript error class 를 통해서 전달
    reject(new Error("네트워크 연결이 원활하지 않습니다."));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });
};

const getEgg = (hen) => {
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
  });
};

const cook = (egg) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried egg`), 1000);
  });
};

getHen()
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
