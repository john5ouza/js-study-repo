class Person{
  constructor(name){
    this.name = name
  }
  
  printNameArrow(){
    setTimeout(() => {
      console.log(`Arrow's greeting: Hello ${this.name}!`)
    }, 2000)
  }
  
  printNameFunction(){
    setTimeout(function(){
      console.log(`Function's greeting: ${this.name}`)
    }, 2000)
  }
  
  printNameFunction02(){
    setTimeout(function(){
      const self = this.name
      console.log(`Function's greeting: ${self}`)
    }.bind(this), 2000)
  }
}

const peter = new Person('Peter')
peter.printNameArrow()

const howard = new Person('Howard')
howard.printNameFunction()

const carl = new Person('Carl')
carl.printNameFunction02()