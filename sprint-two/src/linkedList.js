var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    //if linked list is empty
    if(!list.head){
      list.tail = node;
      list.head = node;
    }
    //if linked list has nodes
    if(list.head){
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if(list.head && !list.head.next){
      var previousHead = list.head.value;
      list.head = null;
      list.tail = null;
      return previousHead;
    }else{
      var previousHead = list.head.value;
      list.head = list.head.next;
      console.log(previousHead,list.head.next, list.head.value)
      return previousHead;
    }
  };

  list.contains = function(target) {
    if(!list.head){
      return false;
    }
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }else{
        current = current.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail: O(1)
    removeHead: O(1)
    contains: O(n)
 */
