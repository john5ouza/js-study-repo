// Destructuring of Array
  // const numbers = [ 1, 2, 3, 4, 5 ];
  // const [ first, second ] = numbers;

  // console.log(first, second);

// Destructuring of Object
  // const personalData = { name: 'John', age: 30 };
  // const professionalData = { job: 'Designer', work: 'Boavista Tecnologia' };
  
  // const { name, age, status = true } = personalData;
  // console.log( `Name: ${name}, Age: ${age}, Status: ${status}` );

  // const { name: firstName, age: currentAge } = personalData;
  // console.log( firstName, currentAge );

  // const { personalData, professionalData } = person;


  const person = {
    personalData: {
      fullName: 'John Souza',
      age: 30,
    },
    professionalData: {
      role: 'Designer',
      company: 'Boavista Tecnologia'
    }
  }

  const { personalData, professionalData } = person;
  const fullDataPerson = { personalData, professionalData };

  console.log(fullDataPerson);


// Destructuring of Object
