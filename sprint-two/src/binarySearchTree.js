var BinarySearchTree = function (value) {
  var nodes = Object.create(binaryMethods);
  nodes.value = value;
  nodes.right = null;
  nodes.left = null;

  return nodes;
};

var binaryMethods = {};

binaryMethods.insert = function(val) {
  var node = BinarySearchTree(val);
  if(val > this.value){
    if(this.right === null){
      this.right = node;
    }else{
      this.right.insert(val);
    }
  }else if(val < this.value){
    if(this.left === null){
      this.left = node;
    }else{
      this.left.insert(val);
    }
  }
};

binaryMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if(this.left && target < this.value){
    return this.left.contains(target)
  }else if (this.right && target > this.value){
    return this.right.contains(target)
  }
  return false;
};

binaryMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(n)
 */
