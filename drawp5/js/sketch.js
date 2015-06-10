function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');
}

function draw() {
	background(255, 200, 200);
	color(255, 0, 0);
	rect(mouseX, mouseY, 50, 50);


}