function calculator() {
  (this.firstNum = 0),
    (this.secondNum = 0),
    (this.read = function () {
      this.firstNum = +prompt('First number');
      this.secondNum = +prompt('Second number');
    }),
    (this.sum = () => {
      return this.firstNum + this.secondNum;
    }),
    (this.mul = () => {
      return this.firstNum * this.secondNum;
    });
}

let obj = new calculator();
obj.read();
console.log(obj);
console.log(obj.sum());
console.log(obj.mul());
