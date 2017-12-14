onmessage =  function(e){
  console.log(e.data);
  setInterval(function(){
    postMessage(randoColor());
  }, 100)
};

var randoColor = function() {
  let color = ['#'];
  for (let i = 0; i < 6; i++)
    color.push(Math.floor(Math.random() * 16).toString(16).toUpperCase())
  return color.join("")
}
