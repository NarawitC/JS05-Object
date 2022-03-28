let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi(); // *
// "John" เพราะ (user.sayHi)() =
// function () {
//   console.log(this.name);
// }
// =
// function () {
//   console.log(user.name);
// }
