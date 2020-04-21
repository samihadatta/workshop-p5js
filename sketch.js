const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

function setup() {
  createCanvas(CANVAS_WIDTH , CANVAS_HEIGHT);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
  }
}

// let canvas_width; 
// let canvas_height; 

// // data structures

// class Ball {
//     constructor(pos, rad) {
//       this.pos = pos;
//       this.rad = rad;
//     }
//     draw_ball() {
//       ellipse(this.pos.x, this.pos.y, 2*this.rad, 2*this.rad);
//     }
//   }

// let balls = [];

// // methods

// function setup() {
//   canvas_width = windowWidth-100;
//   canvas_height = windowHeight-100;
//   createCanvas(canvas_width, canvas_height);
// }

// function draw() {
//     for (let i = 0; i < balls.length; i++) {
//         let ball = balls[i];
//         ball.draw_ball();
//     }
// }

// function mouseClicked() {
//     let ball = new Ball(createVector(mouseX, mouseY), 80);
//     balls.push(ball);
// }