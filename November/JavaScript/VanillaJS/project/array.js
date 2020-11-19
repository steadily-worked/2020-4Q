"use strict";

// 배열은 정말 유용하게 많이 쓰인다.
// object와 자료구조의 차이점은?
// object는 서로 연관된 특징을 묶어둔 것임. 여기에서 이런 비슷한 타입의 object들을 묶어둔 것을 자료구조라고 한다.
// JavaScript === dynamically typed language

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 0번째: 1, 1번째: 2

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]); // 배열 바깥 부분을 콘솔로그 찍으면 undefined가 나옴
console.log(fruits[fruits.length - 1]); // 제일 마지막 요소를 가져옴

// console.clear();
// 3. Looping over array
// print all fruitsㄴ
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void,(value 하나하나를 호출해준다) thisArg?: any(전달한 callback 함수를 value마다 호출해준다.)): void;
// value의 값 및 그 index, 전체적인 값이 전달됨
// fruits.forEach(function (fruit, index) {
//   // value, index
//   console.log(fruit, index);
// });
fruits.forEach((fruit, index) => console.log(fruit, index));
// forEach는 배열 안에 들어있는 value들 마다 내가 전달한 함수를 출력한다.

// 4. Addition, Deletion, Copy
// push: add in item to the end
fruits.push("🍒", "🍓");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("a", "b");
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);
// shift, unshift는 push, pop보다 느리다. 왜냐면 맨앞을 지우면 나머지를 한칸씩 다 앞으로 당기는 과정을 거쳐야 하기 때문
// 그래서, 기왕이면 push, pop을 이용하는 게 더 효율적이다.

// splice: remove an item by index position
fruits.push("🍈", "🍆");
console.log(fruits);
fruits.splice(1, 1); // 하면 이제 기존의 1번 인덱스에 있던 게 지워진다.
console.log(fruits);
fruits.splice(1, 1, "c", "d");
console.log(fruits); // 하면 1번 인덱스에 있던 게 지워지고 'c', 'd'가 그 위치에 순서대로 추가된다.
// fruits.splice(1, 0, 'C', 'D'); 이렇게 하면 지워지진 않고 그 위치에 'C', 'D'가 들어가게 됨

// combine 2 arrays
const fruits2 = ["A", "B"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // 추가된 fruits2의 요소가 맨 뒤에 순서대로 추가됨
// 언뜻 보면 push와 비슷한 것 같지만.. 두 개의 배열을 아예 합치는 것과 just push는 차이점이 있다.

// 5. Searching
// find the index
// console.clear();
console.log(fruits);

// indexOf: find the index
console.log(fruits.indexOf("🍎")); // 없으면 -1, 있으면 그 인덱스 값 출력

// includes
console.log(fruits.includes("🍎")); // 있으면 true, 없으면 false

// lastIndexOf
// console.clear();
fruits.push("b");
console.log(fruits);
console.log(fruits.indexOf("b")); // indexOf -> 여러개 있으면 가장 앞의 index 출력
console.log(fruits.lastIndexOf("b")); // lastIndexOf -> 여러개 있으면 가장 뒤의 index 출력

// API들 읽어보기
