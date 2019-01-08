var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  var search = function(obj){
    obj.forEach(function(child){
      if (child.value === target){
        found = true;
      }else if (child.children.length > 0){
        search(child.children);
      }
    });
  };

  search(this.children);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addchildren: O(1)
  contains: O(n)
 */
