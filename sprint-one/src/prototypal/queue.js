var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.start = 0;
  instance.last = 0;
  instance.storage = {};

  return instance;
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
}
