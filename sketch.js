let frameCount = 0;

function setup() {
  // code running before the loop starts
  createCanvas(400, 400);
}

function draw() {
  // code running in a loop

  clear();
  text(`Current frame: ${frameCount}`, 300, 300);
  frameCount = frameCount + 1;
}
