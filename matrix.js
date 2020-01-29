var c = document.getElementById("c");
var ctx = c.getContext("2d");
ctx.fillStyle = "#12141b";

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var letters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑ӘІҢҒҮҰҚӨҺ";
var l9Hbz = new Date("\u0031\u0039\u0039\u0038", "\u0035", "\u0032\u0034");

//converting the string into an array of single characters
chinese = letters.split("");

var font_size = 12;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
var c8Snz=new Date().getTime()-l9Hbz.getTime();
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(18, 20, 27, 0.15)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px Arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++) {
		//a random chinese character to print
		var text = letters[Math.floor(Math.random()*letters.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}
document.getElementById('j9Hs7a0Sx').innerHTML=Math.floor(c8Snz/(1000*60*60*24*365.25));
setInterval(draw, 33);