class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}
class Dog extends Animal {
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const animal = new Animal("Floki");
console.log(animal);
animal.speak();

const newDog = new Dog("Black", "Labrador");
console.log(newDog);
newDog.speak();