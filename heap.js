/*
 * Binary heap implementation 
*/


var BinaryHeap = function(scoreFunction) {
  this.storage = [];
  this.scoreFunction = scoreFunction;
};

BinaryHeap.prototype.push = function(element) {
  this.storage.push(element);
  this.bubbleUp(this.storage.length - 1);
  console.log('heap', heap);
};

BinaryHeap.prototype.pop = function() {
  var firstElement = this.storage[0];
  var lastElement = this.storage.pop();
  
  if(this.storage.length > 1) {
    this.storage[0] = lastElement;
    this.sinkDown(0)
  }
  console.log('heap', this.storage);
  return firstElement;
};

BinaryHeap.prototype.remove = function(element) {

};

BinaryHeap.prototype.size = function() {
  return this.storage.length;
};

BinaryHeap.prototype.bubbleUp = function(elementIndex) {
  var element = this.storage[elementIndex];
  var score = this.scoreFunction(element);

  while(elementIndex > 0) {
  	var parentIndex = Math.floor((elementIndex + 1) / 2) - 1;
  	var parentElement = this.storage[parentIndex];	
  	var parentScore = this.scoreFunction(parentElement);

  	if(score >= parentScore) {
  	  break;
  	} else {
  	  this.storage[parentIndex] = element;
  	  this.storage[elementIndex] = parent;
  	  elementIndex = parentIndex;
  	}
  }
};	

BinaryHeap.prototype.sinkDown = function(elementIndex) {
  var element = this.storage[elementIndex];
  var score = this.scoreFunction(element);

  var child2Index = (elementIndex + 1) * 2;
  var child1Index = children1Index - 1;
  
  var swap = null;
  while(true) {
    if(child1Index < this.storage.length) {
      var child1 = this.storage[child1Index];
      var child1Score = this.scoreFunction(child1);
      
      if(child1Score < score) {
      	swap = child1Index;
      }
    }
    if(child2Index < this.storage.length) {
      var child2 = this.storage[child2Index];
      var child2Score = this.scoreFunction(child2);

      if(child2Score < (swap === null ? score : child1Score)) {
        swap = child2Index;
      }
    }

    if(swap === null) {break;}

    this.storage[elementIndex] = this.storage[swap];
    this.storage[swap] = element;
    elementIndex = swap;
  }
};

