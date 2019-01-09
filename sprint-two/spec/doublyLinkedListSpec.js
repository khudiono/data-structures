describe('doublyLinkedList', function() {
  var dlinkedList;

  beforeEach(function() {
    // dlinkedList = LinkedList();
    dlinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dlinkedList).to.have.property('head');
    expect(dlinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail", and "contains"', function() {
    expect(dlinkedList.addToTail).to.be.a('function');
    expect(dlinkedList.removeHead).to.be.a('function');
    expect(dlinkedList.contains).to.be.a('function');
    expect(dlinkedList.removeTail).to.be.a('function');
    expect(dlinkedList.addToHead).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dlinkedList.addToTail(4);
    expect(dlinkedList.tail.value).to.equal(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new addToHead is called', function() {
    dlinkedList.addToHead(4);
    expect(dlinkedList.head.value).to.equal(4);
    dlinkedList.addToHead(5);
    expect(dlinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.head.value).to.equal(4);
    dlinkedList.removeHead();
    expect(dlinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.value).to.equal(5);
    dlinkedList.removeTail();
    expect(dlinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dlinkedList.addToTail(4);
    expect(dlinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.contains(4)).to.equal(true);
    expect(dlinkedList.contains(5)).to.equal(true);
    expect(dlinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    dlinkedList.removeHead();
    expect(dlinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dlinkedList
  it('should reassign head to the next node when calling removeHead', function(){
    dlinkedList.addToTail(1);
    dlinkedList.addToTail(2);
    var nextNode = dlinkedList.head.next.value;
    expect(dlinkedList.head.value).to.equal(1);
    dlinkedList.removeHead();
    expect(dlinkedList.head.value).to.equal(nextNode);
  });
});
