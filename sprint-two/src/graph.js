

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {
    'edges': []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var key in this.storage) {
    if (this.storage[key].edges.includes(node)) {
      var indexOfNode = this.storage[key].edges.indexOf(node);
      this.storage[key].edges.splice(indexOfNode, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].edges.includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.storage[fromNode].edges.indexOf(toNode);
  this.storage[fromNode].edges.splice(index, 1);
  var index2 = this.storage[toNode].edges.indexOf(fromNode);
  this.storage[toNode].edges.splice(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var node in this.storage){
    cb(node);
    this.storage[node].edges.forEach(function(edge){
      cb(edge);
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1)
  contains: O(n)
  removeNode: O(n)
  addEdge: O(1)
  hasEdge: O(n)
  removeEdge: O(n)
  forEachNode: O(n)
 */
