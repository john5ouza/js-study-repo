const rockets = [
  { country: 'USA', launches: 105 },
  { country: 'Russia', launches: 41 },
  { country: 'China', launches: 35 },
  { country: 'Europe (ESA)', launches: 15 },
  { country: 'India', launches: 7 },
  { country: 'Japan', launches: 6 },
  { country: 'North Korea', launches: 5 },
  { country: 'Israel', launches: 1 }
]

const findJapan = rockets.find((item) => {
  return item.country === 'Japan'
})

// console.log(findJapan)

//----

const wishList = [
  { title: 'Lamborghini Aventador', price: '$500,000' },
  { title: 'Ferrari 488 GTB', price: '$300,000' },
  { title: 'McLaren 720S', price: '$300,000' },
  { title: 'Porsche 911 Turbo S', price: '$200,000' },
  { title: 'Rolls-Royce Ghost', price: '$300,000' }
]

const findFerrari = wishList.find((item) => {
  return item.title === 'Ferrari 488 GTB'
})

const findIndexPorshe = wishList.findIndex((item) => {
  return item.title === 'Porsche 911 Turbo S'
})

console.log(findFerrari)
console.log(findIndexPorshe)