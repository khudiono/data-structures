class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
    this.start = 0;
    this.last = 0;
  }
  //methods

  enqueue(value) {
    ++this.last;
    this.storage[this.last] = value;
  }

  dequeue() {
    if (this.last - this.start > 0) {
      ++this.start;
      var val = this.storage[this.start];
      delete this.storage[this.start];
      return val;
    }
  }

  size() {
    return this.last - this.start;
  }

}
