var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeI = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.sizeI] = value;
  this.sizeI++;
}

Stack.prototype.pop = function(){
  if (this.sizeI > 0){
    var val = this.storage[this.sizeI -1];
    delete this.storage[this.sizeI -1];
    this.sizeI--;
    return val;
  }
}

Stack.prototype.size = function(){
  return this.sizeI;
}

