var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.sizeI = 0;

  return instance;
};

var stackMethods = {
  push: function(value)  {
    this.storage[this.sizeI] = value;
    this.sizeI++;
  },

  pop: function() {
    if (this.sizeI > 0) {
      var val = this.storage[this.sizeI -1];
      delete this.storage[this.sizeI -1];
      this.sizeI--;
      return val;
    }
  },
  size: function(){
    return this.sizeI;
  }
};
