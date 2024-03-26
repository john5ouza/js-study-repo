const numbers = [ 3, 4, 6, 8]
const sumNumbers = numbers.reduce((counter, number) => {
  return counter + number
}, 0)

// console.log(sumNumbers)

//------

const letters = [ 'a', 'b', 'c', 'd' ]
const lettersUnited = letters.reduce((counter, letter) => {
  return counter + letter
}, 0)

// console.log(lettersUnited)

//------

const people = [
  { name: 'John', age: 30, voted: true },
  { name: 'Alice', age: 25, voted: false },
  { name: 'Bob', age: 40, voted: true },
  { name: 'Carol', age: 35, voted: false },
  { name: 'David', age: 20, voted: true },
  { name: 'Eva', age: 28, voted: true },
  { name: 'Frank', age: 45, voted: false },
  { name: 'Gina', age: 32, voted: true }
]

const truePerson = people.reduce((counter, person) => {
  if(person.voted == true) {
    return counter + person.age
  } else {
    return counter
  }
}, 0)

// console.log(`The total persons voted True is: ${truePerson}`)

//------

const wishList = [
  { title: 'Lamborghini Aventador', price: 500000 },
  { title: 'Ferrari 488 GTB', price: 300000 },
  { title: 'McLaren 720S', price: 300000 },
  { title: 'Porsche 911 Turbo S', price: 200000 },
  { title: 'Rolls-Royce Ghost', price: 300000 }
]

const totalPrice = wishList.reduce((counter, wishItem) => {
  return counter + wishItem.price
}, 0)

console.log(`The total price of the wish list: ${totalPrice}`)
