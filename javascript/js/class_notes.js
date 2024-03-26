class Warrior {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  fight(){
    console.log(`The Warrior ${this.name}, have ${this.age} years old, is fighting!`)
  }
}

const warrior = new Warrior('John', 30)
warrior.fight()

class Viking extends Warrior {
  constructor(name, age){
    super(name, age)
  }
  fight(){
    console.log(`The Viking ${this.name}, have ${this.age} years old, is fighting in Odin's honor!`)
  }
  fightWithAxe(){
    console.log(`The Viking ${this.name}, have ${this.age} years old, is fighting with your axe and he named Thor!`)
  }
}

const viking = new Viking('Ragnar', 31)
viking.fight()
viking.fightWithAxe()
