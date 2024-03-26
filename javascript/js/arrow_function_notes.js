const sum = (a, b) => a + b
console.log(sum(10, 5))

const isNegative = (number) => number < 0
console.log(isNegative(-10))
console.log(isNegative(10))

const newUser = (name, age) => ({ name, age })
console.log(newUser('John', 30))
console.log(newUser('Peter', 28))

setTimeout(() => {
  console.log('Hello, friend.')
}, 2000)