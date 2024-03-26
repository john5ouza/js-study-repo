const numbers = [ 1, 2, 3, 4, 5, 6]

const isEven = numbers.some((number) => {
  return number % 2 == 0
})

// console.log(isEven)

// -----

const users = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Emily', age: 12 },
  { name: 'Michael', age: 35 },
  { name: 'Sophia', age: 32 }
]

const somePerson = users.some((person) => {
 return person.age >= 18
})

// console.log(somePerson)

//-----

const numbers02 = [ 1, 2, 3, 4, 5, 6]
const allEvenHere = numbers02.every((number) => {
  return number % 2 == 0
})

// console.log(allEvenHere)

//-----

const wishList = [
  { title: 'Car', stockQuantity: 10 },
  { title: 'House', stockQuantity: 25 },
  { title: 'Computer', stockQuantity: 0 },
  { title: 'Phone', stockQuantity: 20 },
  { title: 'Watch', stockQuantity: 0 },
  { title: 'Camera', stockQuantity: 12 }
]

const haveSctock = wishList.every((item) => {
  return item.stockQuantity > 0
})

console.log(haveSctock)
