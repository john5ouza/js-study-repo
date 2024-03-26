class Animal {
  constructor(name) {
    this.name = name
  }
  talk(){
    console.log(`${this.name} talks.`)
  }
}

class Dog extends Animal {
  constructor(name){
    super(name)
  }

  talk() {
    console.log(`${this.name} make some noise!`)
  }
}

const newAnimal = new Animal('Simba')
console.log(newAnimal)
newAnimal.talk()

const newDog = new Dog('Floki')
console.log(newDog)
newDog.talk()