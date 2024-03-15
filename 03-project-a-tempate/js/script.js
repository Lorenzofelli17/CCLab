console.log("test");

let x;
let amp = 100;
let speed = 1;
let rotationAngle = 0; // Initial rotation angle

function setup() {
    let canvas = createCanvas(600, 500);
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

    x += speed; // control the speed of the ellipses
    if (x > width) {
        x = 0;
    }

    // changing colors to the lines
    strokeWeight(5);
    stroke(255 - r, 255 - g, 255 - b);

    //  oscillating lines across the screen
    for (let i = 0; i < width; i++) {
        // Sine wave oscillation
        let ySin = height / 2 + sin(freq + i * 0.01) * amp;
        point(i, ySin);

        let yCos = height / 2 - cos(freq + i * 0.01) * amp;
        point(i, yCos);
    }

    // Rotate ellipses
    noStroke();
    fill(255 - r, 255 - g, 255 - b);
    let ellipseWidth = map(mouseX, 0, width, 10, 50);
    let ellipseHeight = map(mouseX, 0, width, 20, 100);

    // Sine ellipse
    push();
    let ySinEllipse = height / 2 + sin(freq + x * 0.01) * amp;
    translate(x, ySinEllipse);
    rotate(rotationAngle);
    ellipse(0, 0, ellipseWidth, ellipseHeight);
    pop();

    // Cosine ellipse
    push();
    let yCosEllipse = height / 2 - cos(freq + x * 0.01) * amp;
    translate(x, yCosEllipse);
    rotate(-rotationAngle); // Rotate in the opposite direction for variety
    ellipse(0, 0, ellipseWidth, ellipseHeight);
    pop();

    // Update the rotation angle for the next frame
    rotationAngle += 0.05; // Adjust this value to control rotation speed
}

function mousePressed() {
    // Reset x to 0 or change speed when canvas is clicked
    x = 0;
    speed = random(0.5, 2); // Change speed to a random value between 0.5 and 2
}
