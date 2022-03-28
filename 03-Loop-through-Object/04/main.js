const checkStop = (obj) => {
  let outputObj = {};

  while (true) {
    for (let key in obj) {
      if (obj[key] === 'stop') {
        break;
      } else {
        outputObj[key] = obj[key];
      }
    }

    break;
  }
  return outputObj;
};

let testobj = {
  a: 'a',
  c: 'stop',
  b: 'b',
};

console.log(checkStop(testobj));
