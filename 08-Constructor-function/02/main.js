function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = () => {
    this.currentValue += +prompt('Next number');
  };
  this.show = () => {
    alert(this.currentValue);
  };
}

// const obj = new Accumulator(5);
// obj.show();
// obj.read();
// obj.show();
