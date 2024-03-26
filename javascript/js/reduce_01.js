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

const launchesTotal = rockets.reduce((counter, rocket) => {
  return counter + rocket.launches
}, 0)

console.log(`TOTAL LAUNCHES: ${launchesTotal}`)
