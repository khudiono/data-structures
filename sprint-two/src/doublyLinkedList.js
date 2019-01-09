var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(!list.head){
      list.tail = node;
      list.head = node;
    }
    if(list.head){
      node.prev = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if(!list.head){
      list.head = node;
      list.tail = node;
    }else{
      var previousHead = list.head;
      list.head.prev = node;
      list.head = node;
      list.head.next = previousHead;
    }
  };

  list.removeTail = function(){
    var oldTail = list.tail.value;
    list.tail = list.tail.prev
    list.tail.next = null;
    return oldTail;
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
