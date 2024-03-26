  // const person = {
  //   firstName: "John",
  //   lastName: "Souza",
  //   age: 30,
  //   hobbies: [ "Watch F1", "Play Soccer", "Read" ],
  // };

  // const { firstName, lastName, hobbies } = person;

  // console.log(firstName, lastName);
  // console.log(hobbies[2]);

// -----

  const dataUser = [
    {
      id: 1,
      description: "Programm Class",
      isCompleted: true,
    },
    {
      id: 2,
      description: "Read",
      isCompleted: false,
    },
    {
      id: 3,
      description: "Trainning",
      isCompleted: true,
    },
  ];

  const descriptionOfDataUser = dataUser[2].description;
  const descriptionId = dataUser.map((user) => {
    return user.id;
  });

  
  console.log( descriptionOfDataUser );
  console.log(`User's id: ${descriptionId}.`);



