// const greetings = (name) => {
//   if (name) {
//     return "Hello " + name + "!"
//   } else {
//     return 'Hey.'
//   }
// } 

// // -----

// console.log(greetings("John Souza"));
// console.log(greetings());

// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(10, 5));

// // -----

// const arrowTest = () => console.log("Teste!");
// arrowTest();

// -----

const user = {
  name: 'Theo',
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log('username: ' + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log('username: ' + this.name);
    }, 700);
  },
};

user.sayUserName();
user.sayUserNameArrow();