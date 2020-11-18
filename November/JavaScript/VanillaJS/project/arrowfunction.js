// Function
// 한가지의 task나 값을 구하기 위해 사용
// 재사용이 가능함

// functiion declaration
// function name(param1, param2) { body... return; }
// 하나의 함수는 한 가지 일만 하도록 만들어야함
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. 파라미터
// premitive parameters: passed by value (메모리에 value 저장돼있으므로 value 전달)
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const steadily = { name: "steadily" };
changeName(steadily);
console.log(steadily);

// 3. 디폴트 파라미터 (ES6 추가)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest 파라미터

function printAll(...args) {
  // 배열 형태로 전달
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("steadily", "worked");

// 5. local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
    console.log(childMessage);
  }
  //   console.log(childMessage); // 오류남. 안에 정의되어있는 함수를 밖에서 인식할 수 없음.
}
printMessage();

// 6. return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }

  // good
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 땐 return; 을 해서 빨리 함수를 실행하고,
  }
  // long upgrade logic... -> 조건이 맞는 경우 해당 로직을 실행하도록 함
}

// 8. Function expression

const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; // 71행의 sum함수를 불러온 것.
console.log(sumAgain(1, 3));

// 9. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!");
};

const printNo = function () {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// 10. Arrow Function
// always anonymous (항상 이름이 없음)
// const simplePrint = function () {
//   console.log("simplePrint!");
// };
const simplePrint = () => console.log("simplePrint!"); // 위 함수를 화살표 함수를 이용해서 아래로 바꾼 것
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})(); // 이렇게 하면, 따로 hello()를 불러오지 않고도 함수 작성과 동시에 불러올 수 있다.

// function calculate(command, a, b)
// command: (add, substract, divide, multiply, remainder)
