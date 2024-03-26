function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' está andando.';
  }
}

const john = new Person('John');
console.log(john.walk());