let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
let retire2 = queue.shift();

function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (value) {
  this.arr.push(value);
};

Queue.prototype.dequeue = function () {
  return this.arr.shift();
};

const fifo = new Queue();

fifo.enqueue(1);
fifo.enqueue(2);
fifo.enqueue(3);

console.log(fifo);
console.log(fifo.dequeue());