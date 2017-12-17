//websocket API
// Creating a web socket server
// bi-directional communication
// event listeners
// establish handshake between client and server
// data will be continuously shared between client and server
// transferred as both secure and unsecure

const ws = new WebSocket("ws://demos.kaazing.com/echo");

document.getElementById("echo").addEventListener("click", function(){
  ws.send(document.getElementById("echoText").value)
});

ws.addEventListener("message", function(d){
  alert(d.data);
})
