// you can't directly manipulate the DOM from inside a worker,
// A dedicated worker is only accessible from the script that first spawned it
// shared workers can be accessed from multiple scripts.
// Data is shared via messages

var color = '';
//Constructor
w = new Worker("worker.js");

w.postMessage("start ww");

w.onmessage = function(e){
  color = e.data
}
