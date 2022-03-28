const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok',
    },
  },
};
const checkEmptyObj = (obj) => {
  isObj = false;
  for (let key in obj) {
    isObj = true;
  }
  return isObj;
};

const logProvince = (obj) => {
  if (checkEmptyObj(obj)) console.log(obj.distributor.address.province);
  else console.log('This is not object');
};

const product2 = {};
logProvince(product2);
