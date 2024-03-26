class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak(){
    console.log(`${this.name} make a noise.`);
  }
}

const dog = new Animal ('Floki', 3);
dog.speak();

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  speak() {
    console.log(`${ this.name } barks.`);
  }
}

const myDog = new Dog('Flokinho', 3, 'Border Collie');
myDog.speak();