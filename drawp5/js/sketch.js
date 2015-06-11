document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');
}

function draw() {
	background(255, 200, 200);
	color(255, 255, 0);
	rect(touchX, touchY, 50, 50);


}