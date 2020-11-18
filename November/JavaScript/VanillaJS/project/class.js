"use strict";
// class: template
// object: instance of a class
// JavaScript classes
// - introfduced in ES6
// syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fileds
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// methods

const steadily = new Person("steadily", 20);

steadily.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  // 32행의 this.age = age에서 this.age를 가져옴
  set age(value) {
    this._age = value < 0 ? 0 : value;
    // value가 0보다 작으면 0을 쓰고 아니면 value를 할당
  }
}

const user1 = new User("steadily", "Job", -1);
console.log(user1.age); // 40행에 따라서, age value가 0보다 작으므로 콘솔에 찍으면 0을 할당함.

// 3. Public & Private

class Experiment {
  publicField = 2;
  privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
// 52행 변수 앞에 #를 붙이면 undefined고 떼면 변수에 할당된 값이 나옴

// 4. Static properties and methods

class Article {
  static publisher = "steadily-worked";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. 상속과 다양성

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // 이렇게 괄호만 있다면, Shape와 완전히 똑같은 것이라는 뜻이고
class Triangle extends Shape {
  // 괄호 안에 새롭게 추가된 게 있는 경우 Shape를 가져오고 + 추가로 지정한다는 뜻
  draw() {
    super.draw(); // super키워드는 부모 오브젝트의 함수 호출 시 사용한다.
    console.log("세모");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // triangle이 shape을 상속했으므로 true
console.log(triangle instanceof Object); // 모든 게 다 Object를 상속한 것임.
console.log(triangle.toString());
