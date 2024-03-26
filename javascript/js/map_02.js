// const numbers = [ 2, 4, 6, 8, 10 ]

// const multiNumbers = numbers.map((item, index) => {
//   console.log(`ITEM: ${item} | INDEX: ${index}`)
//   return item * 2
// })

// console.log(multiNumbers)

//-----

const user = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Peter',
    age: 28
  }
]

const userMultiAge = user.map((item, index) => {
  return {...item, age: item.age * 2}
})

console.log(userMultiAge)