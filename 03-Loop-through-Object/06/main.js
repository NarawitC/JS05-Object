let productName = prompt('Product Name');
let amountProduct = prompt('Amount Product');
let price = prompt('Price');
let discount = prompt('Discount');
let obj = {};
if (discount === '0' || discount === null || discount === 'undefined' || discount.trim() === '') {
  price = +price;
  obj = {
    productName,
    amountProduct,
    price,
  };
} else {
  price = +price;
  discount = +discount;

  obj = {
    productName,
    amountProduct,
    price,
    discount,
  };
}
// console.log(obj);

const calPrice = (obl) => {
  let result = 0;
  if ('discount' in obj) {
    result = (obj.price * (100 - obj.discount)) / 100;
  } else {
    result = obj.price;
  }
  return result;
};

console.log(calPrice(obj));
