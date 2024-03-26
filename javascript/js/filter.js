  // const numbersArr = [1, 2, 3, 4, 5]

  // const highNumbersArr = numbersArr.filter((n) => {
  //   if (n >= 3) {
  //     return n
  //   }
  // })

  // console.log(highNumbersArr)

// -----

  const users = [
    { name: "John", available: true },
    { name: "Bruno", available: false },
    { name: "Lucas", available: false },
    { name: "Joey", available: true },
  ];

  const availableUsers = users.filter( (users) => users.available );
  const notAvailableUsers = users.filter( (users) => !users.available );

  console.log( availableUsers );
  console.log( notAvailableUsers );

// -----

  // function greet(name, callback) {
  //   console.log('Hello, ' + name);
  //   callback();
  // }

  // function sayGoodbye() {
  //   console.log('Goodbye!');
  // }

  // greet('John', sayGoodbye);
