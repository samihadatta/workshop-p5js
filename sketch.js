// const CANVAS_WIDTH = 1000;
// const CANVAS_HEIGHT = 500;

// function setup() {
//   createCanvas(CANVAS_WIDTH , CANVAS_HEIGHT);
// }

// function draw() {
//   if (mouseIsPressed) {
//     ellipse(mouseX, mouseY, 80, 80);
//   }
// }

let canvas_width; 
let canvas_height; 
let balls = [];
let colorPicker;

// data structures

class Ball {
  constructor(pos, rad, color) {
    this.color = color;
    this.pos = pos;
    this.rad = rad;
    this.vel = createVector(0,0);
    this.acc = -9.8;
  }
    draw_ball() {
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, 2*this.rad, 2*this.rad);
      ball.pos.sub(ball.vel);
      ball.vel.y += ball.acc*deltaTime/1000;
    }
  }


// methods

function setup() {
    canvas_width = windowWidth-100;
    canvas_height = windowHeight-100;
    createCanvas(canvas_width, canvas_height);
    colorPicker = createColorPicker('#FFFFFF');
    colorPicker.position(0, 0);
}

function draw() {
  console.log('in draw');
  console.log(balls);
  clear();
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        console.log(ball);
        ball.draw_ball();
    }
}

function mouseClicked() {
    let ball = new Ball(createVector(mouseX, mouseY), 80, colorPicker.color());
    console.log(ball);
    balls.push(ball);
}