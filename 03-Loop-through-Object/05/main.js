const objList = {
  apple: 1,
  banana: 3,
  melon: 1,
};

for (let key in objList) {
  if (objList[key] > 1) {
    let keyS = [key];
    keyS += 's';

    objList[keyS] = objList[key];
    delete objList[key];
  }
}

console.log(objList);
