// const {a, b, ...rest} = {a: 10, b:20, c: 30, d: 40, e: 50};

// console.log(a, b);
// console.log(rest);

// -----

// const {a, b = 10} = {a: 3, b: 12};
// console.log(a, b); 

// -----

// const viking = {
//   family: 'Lothbrok',
//   beardLength: 'Huge',
//   age: 30
// }
// const { beardLength, age, family } = viking
// console.log(beardLength, age, family)

// -----

// const usuario = {
//   nome: 'John Doe',
//   idade: 30
// }

// const { nome: name, idade: age } = usuario
// console.log( name, age )

// -----

// const { a: first, b: second, ...rest } = {a: 10, b: 20, c:30, d: 40}
// console.log(first, second)
// console.log(rest)

// -----

const pilot = {
  dataPersonal: {
    name: 'John Doe',
    age: 30
  },
  dataPro: {
    category: 'Pilot',
    conquers: 'All star'
  }
}

const { dataPersonal: { name, age }, dataPro: { category, conquers } } = pilot
console.log( `Name: ${name}, Age: ${age} years old. Category: ${category} and ${conquers}.` )