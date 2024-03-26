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

const dataUserJSON = JSON.stringify(dataUser);
const dataUserList = JSON.parse(dataUserJSON);

console.log( dataUserJSON );