let calculator = {
  firstNum: 0,
  secondNum: 0,
  read: function () {
    this.firstNum = +prompt('First number');
    this.secondNum = +prompt('Second number');
  },
  sum: function () {
    return this.firstNum + this.secondNum;
  },
  mul: function () {
    return this.firstNum * this.secondNum;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
