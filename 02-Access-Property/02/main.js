const checkObj = (obj) => {
  isObj = false;
  for (let key in obj) {
    isObj = true;
  }
  return isObj;
};

// x={}
// checkObj(x)
