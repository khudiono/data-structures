var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function (value) {
  ++this.last;
  this.storage[this.last] = value;
};

Queue.prototype.dequeue = function () {
  if (this.last - this.start > 0) {
    ++this.start;
    var val = this.storage[this.start];
    delete this.storage[this.start];
    return val;
  }
};

Queue.prototype.size = function () {
  return this.last - this.start;
};