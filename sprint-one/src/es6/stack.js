class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizeI = 0;
    this.storage = {};
  }

  //methods
  push(value) {
    this.storage[this.sizeI] = value;
    this.sizeI++;
  }

  pop(){
    if (this.sizeI > 0){
    var val = this.storage[this.sizeI -1];
    delete this.storage[this.sizeI -1];
    this.sizeI--;
    return val;
    }
  }

  size(){
    return this.sizeI;
  }

}