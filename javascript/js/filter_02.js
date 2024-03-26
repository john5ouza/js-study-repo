const users = [
  { name: 'John', age: 30 },
  { name: 'Emma', age: 15 },
  { name: 'Michael', age: 35 },
  { name: 'Sophia', age: 18 },
  { name: 'William', age: 32 }
]

const isBigThan18 = users.filter((user) => {
  return user.age > 18
})

console.log(isBigThan18)
