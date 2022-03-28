const multiplyNumeric = (obj, num) => {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= num;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };
