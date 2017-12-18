// The Canvas
// The Drawing Context
// Shapes
// Paths
// Color & style
// Traslate and Transform
// Animate

var red = "#FF0000",
				green = "#00FF00",
				blue = "#0000FF",
				yellow = "#FFFF00",
				purple = "#FF00FF",
				teal = "#00FFFF",
				black = "#000000",
				white = "#FFFFFF"

window.requestAnimationFrame(draw);

function draw(){
		var canvas = document.getElementById('thisCanvas');
		var ctx = canvas.getContext('2d');
	  ctx.clearRect(0, 0, 300, 300); // clear canvas
		ctx.fillStyle = purple;
		ctx.fillRect(10,10,50,50);
		ctx.save();
		ctx.translate(35, 35);
		ctx.rotate((Math.PI / 180) * 1);
		ctx.translate(-35, -35);
	 window.requestAnimationFrame(draw)
}
