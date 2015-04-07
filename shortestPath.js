var Graph = function(numVertices) {
  this.vertices = numVertices;
  this.edges = 0;
  this.marked = [];
  this.adj = [];
  this.edgeTo = [];
  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
    this.marked[i] = false;
  }
};

Graph.prototype.addEdge = function(from, to) {
  this.adj[from].push(to);
  this.adj[to].push(from);
  this.edges++;
};

Graph.bfs = function(vertex) {
  var queue = [];
  this.marked[vertex] = true;
  queue.push(vertex);
  while(queue.length > 0) {
    var v = queue.shift();
    for(var i = 0; i < this.adj[v].length; i++) {
      if(!this.marked[ this.adj[v][i] ]) {
      	this.edgeTo[ this.adj[v][i] ] = v;
        this.marked[ this.adj[v][i] ] = true;
        queue.push( this.adj[v][i] );
      }
    }
  } 
};

Graph.shortestPath = function(from, to) {
  
};




