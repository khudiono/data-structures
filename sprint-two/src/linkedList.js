var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if linked list is empty
    if(list.head === null){
      list.tail = Node(value);
      list.head = list.tail;
    }
    //if linked list has nodes
    if(list.head !== null){
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var previousHead = list.head.value;
    list.head = list.head.next.next;
    return previousHead;
  };

  list.contains = function(target) {
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
