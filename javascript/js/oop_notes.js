class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstname} ${this.lastname}`);
  }

  static speak() {
    console.log("Hey!");
  }

}

const person = new Person("John", "Doe", 30);
console.log(person);
person.getFullName();
Person.speak();