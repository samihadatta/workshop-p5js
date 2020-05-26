let canvas_width; 
let canvas_height; 
let balls = [];
let colorPicker;
const GRAVITY = -9.8;

// data structures
class Ball {
  constructor(pos, rad, color) {
    this.pos = pos;
    this.rad = rad;
    this.color = color;
    this.vel = createVector(0,0);
    this.acc = 0;
    this.building = true;
  }
  draw_ball() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2*this.rad, 2*this.rad);
  }
}

function setup() {
  canvas_width = windowWidth-100;
  canvas_height = windowHeight-100;
  createCanvas(canvas_width, canvas_height);
  colorPicker = createColorPicker('#FFFFFF');
  colorPicker.position(0, 0);
  button = createButton('Reset');
  button.position(canvas_width-50, 0);
  button.mousePressed(reset_canvas);
}

function reset_canvas() {
  balls = [];
}	

function draw() {
  clear();
  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.draw_ball();
    ball.pos.sub(ball.vel);
    ball.vel.y += ball.acc*deltaTime/1000;
    if(ball.building) {
      ball.rad += 0.5;
    }
  }
  check_ball_collisions();
}

function mousePressed() {
  if(mouseX > 0 && mouseX < canvas_width && mouseY > 0 && mouseY < canvas_height) {
    let rad = 10;
    let ball = new Ball(createVector(mouseX, mouseY), rad, colorPicker.color());
    balls.push(ball);
  }
}

// When mouse is released, apply gravitational force to newly made ball
function mouseReleased() {
  let ball = balls[balls.length - 1];
  ball.building = false;
  ball.acc = GRAVITY;
}

// Change position of ball while it is being created
function mouseDragged() {
  let ball = balls[balls.length - 1];
  if(ball.building) {
    ball.pos.x = mouseX;
    ball.pos.y = mouseY;
  }
}

function check_ball_collisions() {
  for(let i = 0; i < balls.length; i++) {
    let ball1 = balls[i];
    for(let j = i+1; j < balls.length; j++) {
      let ball2 = balls[j];
      // Two balls collide if the distance between them is less than the sum of the radii
      let dist = ball1.pos.dist(ball2.pos);
      if(dist < ball1.rad + ball2.rad) {
      // If balls overlap, correct for the overlap
        let desired_dist = ball1.rad + ball2.rad;
        let error = desired_dist - dist;
        let ball1_fix = (ball1.rad/desired_dist) * error;
        let ball2_fix = (ball2.rad/desired_dist) * error;

        let v = p5.Vector.sub(ball1.pos, ball2.pos);

        let ball1_vec = p5.Vector.mult(v, ball1_fix/dist);
        let ball2_vec = p5.Vector.mult(v, ball2_fix/dist);

        ball1.pos.add(ball1_vec);
        ball2.pos.sub(ball2_vec);

        // Calculate the new velocities of each ball based on simplified 2D physics
        let a1 = p5.Vector.sub(ball1.vel, ball2.vel);
        let b1 = p5.Vector.sub(ball1.pos, ball2.pos);
        let c1 = b1.magSq();
        let d1 = p5.Vector.dot(a1, b1);
        let vel_1 = p5.Vector.sub(ball1.vel, p5.Vector.mult(b1, d1/c1));

        let a2 = p5.Vector.sub(ball2.vel, ball1.vel);
        let b2 = p5.Vector.sub(ball2.pos, ball1.pos);
        let c2 = b2.magSq();
        let d2 = p5.Vector.dot(a2, b2);
        let vel_2 = p5.Vector.sub(ball2.vel, p5.Vector.mult(b2, d2/c2));

        // Set the new velocities for each ball
        ball1.vel = vel_1;
        ball2.vel = vel_2;
      }
    }

    // For each ball, also check for collisions against the floor and the walls
    // The -0.8 multiplier is to dampen the speed of the ball when colliding with walls or the floor
    if(ball1.pos.y > canvas_height - ball1.rad) {

      // This if-statement prevents infinite bouncing
      if(abs(ball1.vel.y) < 1.5) {
        ball1.vel.y = 0;
      }
    
      ball1.vel.y *= -0.8;
      ball1.pos.y = canvas_height - ball1.rad; // Correct overlap
    } else if(ball1.pos.x > canvas_width - ball1.rad) {
      ball1.vel.x *= -0.8
      ball1.pos.x = canvas_width - ball1.rad; // Correct overlap
    } else if(ball1.pos.x < ball1.rad) {
      ball1.vel.x *= -0.8
      ball1.pos.x = ball1.rad; // Correct overlap
    }
  }
}