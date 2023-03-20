function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //definition
  gridx = width / 10;
  gridy = height /10;

  //background
  background(0);

   //circle
  strokeWeight(3)
  stroke(200, 255, 100)
  fill(0, 0, 0, 0)
  circle(mouseX, mouseY, 150);
  
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        //grid
        strokeWeight(random(3))
        stroke(200, 255, 100, random(50))
        line(0, gridy*y + gridy/2, width, gridy*y + gridy/2)
        line(gridx*x + gridx/2, 0, gridx*x + gridx/2, height)
    } 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
