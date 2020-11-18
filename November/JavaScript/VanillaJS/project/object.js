// Object
// JS의 데이터 타입 중 하나.
// 관련 데이터, functionality의 collection
// JS의 거의 모든 objects가, Object의 instance이다.
// object = { key : value } 즉 key와 value의 집합체

const obj1 = {}; // 오브젝트를 만드는 법은 이렇게 괄호로 만들 수도 있고, ('object literal' syntax)
const obj2 = new Object(); // 클래스 템플릿을 이용해서 만들 수도 있다. ('object constructor' syntax)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const steadily = { name: "steadily", age: 4 }; // 이름과 나이를 담은 오브젝트를 만듦.
print(steadily);

steadily.hasJob = true;
// 사람은 이름과 나이 정보만 있으면 충분해 라고 하다가, 이렇게 일을 하고 있는지의 정보를 추가할 수도 있다.
console.log(steadily.hasJob);

delete steadily.hasJob;
console.log(steadily.hasJob);
// 이렇게 만들어둔 것에서 당장 없앨 수도 있다. 없애고 콘솔 출력하면 undefined가 뜸.

// 2. Computed properties
// key는 언제나 string이어야 한다.
console.log(steadily.name);
console.log(steadily["name"]);
steadily["hasJob"] = true;
console.log(steadily.hasJob);

function printValue(obj, key) {
  //   console.log(obj.key); // object에 key라는 property가 들어있니? X
  console.log(obj[key]); // 이렇게 하면 정상적으로 staedily가 출력이 된다.
}
printValue(steadily, "name");
printValue(steadily, "age");
// 나중에 동적으로 키에 관련된 value를 받아와야 될 때 유용하게 쓰일 수 있다.

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// person4를 추가하려면 또 한 줄을 이렇게 써줘야하는데, 이게 귀찮으므로

function makePerson(name, age) {
  return {
    name: name,
    age: age, // key와 value의 이름이 동일하다면 생략해줄 수 있다.
    // name: name, age: age를 name, age로 줄일 수 있다는 것.
    // name,
    // age,
  };
}
const person4 = makePerson("steadily", 25);
console.log(person4);
// object를 여러 개 만들어 주려고 하다 보면, 불가피하게 동일한 key와 value를 여러번 작성해야 되는 문제가 생긴다.
// 순수하게 object만 생성하는 함수는,
// 4. Constructor function 이라고 한다.
// function Person(name, age) {
//     // this = {}; 이것과
//     this.name = name;
//     this.age = age;
//      // return this; 이것이 기본적으로 생략되어 있는 형태.
// }
// 한 후에, const person4 = new Person('steadily', 25); 이런식으로 해줘야했다.

// 5. in operator: property existence check (key in obj)
console.log("name" in steadily);
// 간단하게 키가 있는 지 없는 지를 확인할 수 있는 키워드이다.
console.log("age" in steadily);
console.log("random" in steadily); // false
console.log(steadily.random); // undefined. 존재하지 않는 키를 콘솔에 출력
// 6. for .. in vs for .. of
// for (key in obj)
// console.clear();
for (key in steadily) {
  // steadily가 갖고 있는 key들이 block을 돌 때마다 지역변수에 할당
  console.log(key);
}
// 이렇게 모든 것을 받아 오고 싶을 때 쓰기 좋은 게 for in 함수

// for (value of iterable)
// 배열, list와 같이 iterable한 것들 대상
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 위 식은 가능하긴 하지만 간결하지 못하다.
for (a of array) {
  console.log(a);
}
// 이렇게 간결하게 쓸 수 있다. value는 임의로 지정한 단어이고 아무렇게나 써도 상관없다.
// array 안에 있는 a에 대해서 -> console.log(a) 해라 라는 명령.

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "steadily", age: "25" };
const user2 = user;
// 메모리에는, user라는 변수는 메모리를 가리키고 있는데, 메모리엔 reference가 있다. name: 'steadily', age: '25'.
// user2의 변수는, user를 가리키고 있으므로 user의 reference가 user2에도 할당된다는 것이다.
user2.name = "coder";
console.log(user);
// user2가 가리키고 있는 reference의 이름 steaddily는 coder로 변경되었음. 즉 user가 가리키고 있는 name이 변한 것.
// 정말 오브젝트를 복제, 복사할 수 있는 방법은??

// Old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
// console.clear();
console.log(user3);
// 복사는, 우리가 coder라는 값을 변경한 후에 복사해서 coder로 돼있지만 복사 안했으면 steadily로 돼있을 것임.
// 1번째 key : name, 2번째 : age.

// Object.assign; // JS의 모든 objects는 Object를 상속
// assign<T, U> (target: T, source: U): T & U;
// assign<T, U, V> (target: T, source1: U, source2: V): T & U & V;
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 이렇게 해도 되고,
const user5 = Object.assign({}, user);
console.log(user5); // 이렇게 해도 된다.

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" }; // 두개의 공통 property는 color
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// red가 아니라 blue가 출력되는 이유는, 뒤에 있는 property일수록 앞의 property의 값을 뒤집어 쓰기 때문이다.
// 그러니까, 원래 red였으나 fruit2가 추가되면서 blue로 바뀐 것이다.
