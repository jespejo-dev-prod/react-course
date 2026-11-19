function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

// greet = function () {
//   return "Hola Pedro";
// };

const message = greet("Goku");
const message2 = greet2("Vegeta");

console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "ABC-123",
    username: "k999",
  };
}

const getUser2 = () => ({
  uid: "ABC-123",
  username: "k999",
});

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const myNumber: number[] = [1, 2, 3, 4, 5];

// myNumber.forEach(function (value) {
//   console.log({ value });
// });

// myNumber.forEach((value) => {
//   console.log(value);
// });

// myNumber.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

myNumber.forEach(console.log);
