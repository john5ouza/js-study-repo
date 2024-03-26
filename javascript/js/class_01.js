  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    productWithDiscount(discount) {
      return this.price * ((100 - discount) / 100);
    }
  }

  const tshirt = new Product('Social Tshirt', 20);
  console.log(tshirt.name);
  console.log(tshirt.productWithDiscount(50));

  const tenis = new Product('Nike Shoes 2024', 140);
  console.log(`The tenis is: ${tenis.name} e the value witch 40% of discount is: $${tenis.productWithDiscount(40)}.`);

// -----

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    speak(){
      console.log(`${this.name} make a noise.`);
    }
  }

  const dog = new Animal ('Floki', 3);
  dog.speak();