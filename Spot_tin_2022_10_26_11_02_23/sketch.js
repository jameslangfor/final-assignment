let slider;
let penSize = 1;
let penState = 0;
let img;
var mode;
function preload() {
  bbking= loadImage("fullsizeoutput_123-1.jpeg"); // bb king image

}
function setup() {
  createCanvas(650, 510);
  
  background(90); // background grey
  
  bbking.resize(220,140); // bb king image resize
  
  slider = createSlider(0, 100, 5); // min, max, start
  slider.position(480,510); // x and y
  slider.size(150, 20); // width and heighti
  
}
function draw() {
    if (mouseIsPressed) {
    if (penState == 0) {
	    line(mouseX, mouseY, pmouseX, pmouseY); // draw normal
    }
    if (penState == 1) {
	    ellipse(mouseX, mouseY, 20, 20); // pen becomes circle
    }
    if (penState == 2) {
      line(mouseX-50, mouseY-50, mouseX+50, mouseY+50); // pen draw diagonal
    }
    if (penState == 3) {
     frameRate(10);
  px=random(bbking.width);
  py=random(bbking.height);
    let pixelRegion=bbking.get(px,py,80,80);
  image(pixelRegion,mouseX,mouseY,80,80); // pen draws random image part, following mouse
    }
strokeWeight( slider.value() ); // controlling pen stroke weight with slider
    }
}


function keyTyped() {
  if (key == 'c') {
    background(90); // clear to background
  }
  if (key == 'r') {
    stroke(355, 15, 15); // colour line red
  }
    if (key == 'b') {
    stroke(0,0,255,100); // colour line blue
  }
    if (key == "g") {
    stroke(0, 255, 0,100); // colour line cgreen
  }
   if (key == 'e') {
    penState = 1; // circle pen
  }
    if (key === "R") {
    fill(355, 15, 15,100); // fill circle red
  }
    if (key === "B") {
    fill(0, 0, 255,100); // fill circle blue
  }
  
  if (key === "G") {
    fill(0, 255, 0,100); // fill circle green
  }
  if (key === '/') {
    penState = 2; // draw diagonal line
  }
  if (key === 'i'){
    penState=3; // draw with image
  } 
}
function updatemode() {
  mode = mode + 1;
}
