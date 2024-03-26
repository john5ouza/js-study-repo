function sayMyName(name) {
  console.log('Before callback.');
  name();
  console.log('After callback.');
};

sayMyName(
  () => {
    console.log('In callback.');
  }
);