var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined){
    bucket = [[k, v]];
  }else{
    //if key already exists, update
    var found = false;
    for(var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === k){
        bucket[i][1] = v;
        found = true;
      }
    }
    //if doesn't exist
    if(!found){
      bucket.push([k,v]);
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k){
      bucket.splice(i,1);
    }
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(n)
  retrieve: O(n)
  remove: O(n)
 */
