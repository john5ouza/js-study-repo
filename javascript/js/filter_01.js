const numbers = [ 5, 8, 6, 15, 25, 50 ]

const isBigThanTen = numbers.filter((number) => {
  return number > 10
})

const isShortThanTen = numbers.filter((number) => {
  return number < 10
})

const isEven = numbers.filter((number) => {
  return number % 2 == 0
})

const isOdd = numbers.filter((number) => {
  return number % 2 == 1
})

console.log(isBigThanTen)
console.log(isShortThanTen)
console.log(isEven)
console.log(isOdd)