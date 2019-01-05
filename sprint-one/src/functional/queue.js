var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    ++last;
    storage[last] = value;
  };

  someInstance.dequeue = function() {
    if (last-start > 0){
      ++start;
      var val = storage[start];
      delete storage[start];
      return val;
    }
  };

  someInstance.size = function() {
    return last - start;
  };

  return someInstance;
};
