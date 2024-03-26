  // const numbers = [1, 2, 3, 4, 5];

  // const doubleNumbers = numbers.map((num) => {
  //   return num * 2;
  // });

  // console.log( doubleNumbers );

// ----

  // const users = [
  //   "John",
  //   "Peter",
  //   "Howard",
  //   "Souza",
  // ];

  // const usersId = users.map((user, index) => {
  //   const idNum = index + 1;
  //   return `${idNum}. ${user}`;
  // });

  // console.log( usersId );

// -----

  const products = [
    { name: "T-Shirt", price: 10.99, category: 'Clothes' },
    { name: "Electric Kettle", price: 49.99, category: 'Eletro' },
    { name: "Cooker", price: 400.00, category: 'Eletro' },
    { name: "Pants", price: 50.99, category: 'Clothes' }
  ];

  products.map((product) => {
    if (product.category == 'Clothes') {
      product.onSale = true;
    };
  });

  console.log(products);