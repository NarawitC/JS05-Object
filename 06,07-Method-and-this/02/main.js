var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // *
// เพราะ console.log(user.ref.name) =

// user ={
//   name: 'John',
//   ref: window
// }=

// user.ref = window
// widow ={
//   name = 'Joe'
// }

// user.ref.name = "joe"
