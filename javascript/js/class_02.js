class User {
  constructor(name, age, address){
    this.name = name
    this.age = age
    this.address = address
  }
}

const newUser = new User('John Doe', 30, 'Rua Galileu, 358 - AP 03')
const newUser02 = new User('Jane Doe', 31, 'Rua Vitoriano Borges, 358')
console.log(newUser)
console.log(newUser02)