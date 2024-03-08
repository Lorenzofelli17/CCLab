console.log("test");

let x;
let amp = 100;
let speed = 1;

function setup() {
    let canvas = createCanvas(600, 500);
    canvas.parent("p5-canvas-container");
    x = 0; // Initial x position for the moving balls
}

function draw() {
    // Change background color over time
    let r = 128 + 127 * sin(frameCount * 0.01);
    let g = 128 + 127 * sin(frameCount * 0.02);
    let b = 128 + 127 * sin(frameCount * 0.03);
    background(r, g, b);

    let freq = frameCount * 0.05;

    // mouse changing amplitude
    amp = mouseY / 2;


    x += speed; // control the speed of the circles
    if (x > width) {
        x = 0;
    }

    // changing colors to the lines
    strokeWeight(5);
    stroke(255 - r, 255 - g, 255 - b);

    //  oscillating lines and circles across the screen
    for (let i = 0; i < width; i++) {
        // Sine wave oscillation
        let ySin = height / 2 + sin(freq + i * 0.01) * amp;
        point(i, ySin);

        let yCos = height / 2 - cos(freq + i * 0.01) * amp;
        point(i, yCos);
    }

    // circles
    noStroke();
    fill(255 - r, 255 - g, 255 - b);
    let circleSize = map(mouseX, 0, width, 10, 50); // Change circle size based on mouse
    let ySinCircle = height / 2 + sin(freq + x * 0.01) * amp; // Position for sine wave circle
    circle(x, ySinCircle, circleSize);

    let yCosCircle = height / 2 - cos(freq + x * 0.01) * amp;
    circle(x, yCosCircle, circleSize);
}

function mousePressed() {
    // Reset x to 0 or change speed when canvas is clicked
    x = 0;
    speed = random(0.5, 2); // Change speed to a random value between 0.5 and 2
}
