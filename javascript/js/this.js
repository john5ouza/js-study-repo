// console.log(this)

// ---

// const person = {
//   name: 'John',
//   age: 30,
//   greet: function(){
//     console.log(`Hello, i'm ${this.name}!`)
//   }
// }

// person.greet()

// ---

// function talk(){
//   console.log(this)
// } 
// talk()

// ---

// function Person(name){
//   this.name = name
// }
// const person = new Person('John S.')
// console.log(person.name)

// ---

// const obj01 = { name: 'John' }
// const obj02 = { name: 'Peter' }

// function greet(){
//   console.log(`Hello, ${this.name}`)
// }

// greet.call(obj01)
// greet.apply(obj02)

// const greetPeter = greet.bind(obj02)
// greetPeter()

// --

const obj = {
  value: 50
}

function getValue(){
  return this.value
}

const boundGetValue = getValue.bind(obj)
console.log(boundGetValue())