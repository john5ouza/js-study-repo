const numbers01 = [ 1, 2, 3, 4, 5]
const isBigThanTwo = numbers01.some((number) => {
  return number > 2
})

console.log(isBigThanTwo)

const numbers02 = [ 1, 2, 3, 4, 5]
const isBigThanThree = numbers02.every((numbers02) => {
  return numbers02 > 3
})

console.log(isBigThanThree)