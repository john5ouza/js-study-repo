  // const cars = [ "Ferrari", "Tesla", "Mercedes" ];

  // for (let i = 0; i < cars; i++) {
  //   console.log( cars[i] );
  // }

  // for (let car of cars) {
  //   console.log(car)
  // }

  // cars.forEach((car, index) => {
  //   console.log(index, car);
  // });

//-----

  const person = {
    name: "Jane",
    age: 30,
    academic: true,
    course: "ADS",
  };

  for (property in person) {
    console.log( person[property] );
  }