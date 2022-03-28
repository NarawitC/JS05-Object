const user = {
  email: 'cc@gmail.com',
  isActive: true,
};

user.isActive = false;
console.log(user); // *
// { email: 'cc@gmail.com', isActive: false } เพราะ isActive: false

user = {};
console.log(user);
// Uncaught TypeError: Assignment to constant variable เพราะไปกำหนดค่า const ใหม่
