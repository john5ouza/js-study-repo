const users = [
  { name: 'John', age: 30 },
  { name: 'Michael', age: 35 },
  { name: 'Sophia', age: 18 },
  { name: 'Emma', age: 15 },
  { name: 'William', age: 32 }
]

const findWilliam = users.find((item) => {
  return item.name === 'William'
})

console.log(findWilliam)

const findEmma = users.findIndex((item) => {
  return item.name === 'Emma'
})

console.log(findEmma)