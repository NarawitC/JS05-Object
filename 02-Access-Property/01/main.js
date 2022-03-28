const user = {};

user.name = 'John';
user.surname = 'Doe';
user.name = 'Matt';
delete user.name;

console.log(user);
