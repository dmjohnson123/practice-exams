var x = 0;
var y = 0;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
}

function paint(){
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    fill(255, 255,0);
}