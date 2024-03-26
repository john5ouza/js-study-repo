const numbers = [ 10, 20, 30, 40, 50]

const multiNumbers = numbers.map((item) => {
  return item * 2
})
// console.log(multiNumbers)

//-----

const users = [
  { name: 'John', age: 30 },
  { name: 'Joe', age: 28 },
  { name: 'Peter', age: 25 },
]

const multiAge = users.map((item) => {
  return {...item, age: item.age * 2}
})

// console.log(multiAge)

//-----

const peoples = [
  {
    name: 'Neo',
    age: 30
  },
  {
    name: 'Morpheus',
    age: 50
  },
  {
    name: 'Jonathan',
    age: 16
  }
]

const goToMatrix = peoples.map((person) => {
  if(person.age >= 18) {
    return `HELLO, ${person.name}, YOU HAVE ${person.age}, SO YOU'RE WELCOME IN MATRIX!`
  } else {
    return `SORRY, ${person.name}, YOU HAVE ${person.age}, SO YOU NOT HAVE AGE TO GO TO MATRIX.`
  }
})

console.log(goToMatrix)

