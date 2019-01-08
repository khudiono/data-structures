var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    start: 0,
    last: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    ++this.last;
    this.storage[this.last] = value;
  },
  dequeue: function () {
    if (this.last - this.start > 0) {
      ++this.start;
      var val = this.storage[this.start];
      delete this.storage[this.start];
      return val;
    }
  },
  size: function(){
    return this.last - this.start;
  }
};


