var req = new XMLHttpRequest();
req.addEventListener("load", function(){
  console.log(this.responseText);
})
req.open("get", "https://httpbin.org/get");
req.send();
