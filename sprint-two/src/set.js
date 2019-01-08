var Set = function() {
  var set = Object.create(setPrototype);
  //set._storage = [];
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (!this._storage.includes(item)){
  //   this._storage.push(item);
  // }
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // return this._storage.includes(item);
  // return this._storage.hasOwnProperty(item);
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  // if(this._storage.includes(item)){
  //   var i = this._storage.indexOf(item);
  //   this._storage.splice(i,1);
  // }
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: O(1)
  contains: O(1)
  remove: O(1)
 */
