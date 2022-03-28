const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = { name: 'Coke', price: 18, size: '500mL' };
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *
// { name: 'Coke', price: 18, size: '500mL' } เพราะเป็น object ที่ใช้address เดียวกัน

console.log(product2); // **
// { name: 'Coke', price: 18, size: '500mL' } เพราะเป็น object ที่ใช้address เดียวกัน

console.log(product1 === product2); // ***
// true เพราะเป็น object ที่ใช้address เดียวกัน
