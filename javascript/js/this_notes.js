// function printThis() {
//   console.log(this)
// }

// // printThis()

// const object = {
//   message: 'hello',
//   printThis: printThis
// }

// console.log(object.printThis())

const person = {
  name: 'John',
  printName(){
    const self = this.name
    setTimeout(function(){
      console.log(self)
    }, 2000)
  }
}

person.printName()