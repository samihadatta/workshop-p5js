# CS52 Workshops: Interactive Graphics with p5.js 

![](https://p5js.org/assets/img/p5js.svg)

Let us learn to use `p5.js`, a free and open-source JavaScript library for building interactive graphic applications! As a direct successor of [`Processing.js`](http://processingjs.org/), `p5.js` excels in providing many intuitive modules for creating interactive digital art with minimal setup, all in JavaScript!

## Overview

This tutorial will first teach you the basics of `p5.js`, and then guide you through building an interactive game easily embedded in your own web page.

## Setup

No downloading necessary! Told you - minimal setup.

## Step by Step

### The Basics

1. Let us start with the boilerplate code. In your project root directory, create `index.html` with the following content:

	```html
	<!DOCTYPE html>
	<head>
	  <title>p5.js Workshop</title>
	  <!-- Link to the latest p5.js: https://cdn.jsdelivr.net/npm/p5/lib/ -->
	  <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js" integrity="sha384-lDbYJ/dUd7JOwvyThvjZNnNCN+NhOjHX4KaEa7PxbKcHEUbjt/lrqoiqTlHZOpRy" crossorigin="anonymous"></script>
	  <script src="sketch.js"></script>
	</head>

	<body>
	</body>

	</html>
	```

1. Then, in the same directory, create `sketch.js` with the two blank functions as follows:

	```javascript
	function setup() {
	  
	}

	function draw() {
	  
	}
	```

	`Sketch.js` is where we will code all the `p5.js` magic.
	
1. Quick, draw a circle! Put `ellipse(50, 50, 80, 80);` in your `draw()` function. Go check out your web page. Beautiful, isn't it?

1. I know, I know: circles are boring. Let's make the users draw them for us instead. Let's put the following in `sketch.js`.

	```javascript
	const WINDOW_WIDTH = 1000;
	const WINDOW_HEIGHT = 500;

	function setup() {
	  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
	}

	function draw() {
	  if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 80, 80);
	  }
	}
	```
	
	Refresh your page and unleash your inner artist. A talented user might make something like this:
	
	![Our first interactive application](img/first-interactive-application.png)
	
1. Congratulations! You just made your first interactive graphic application! With nothing more than just an `if` statement and 2 function calls. How did it work, though?

	- As it turns out, `setup()` and `draw()` are two special functions for `p5.js`. `setup()` will run exactly once as soon as the application starts; `draw()`, in turn, will be called over and over unless explicitly stopped (e.g. with [`noLoop()`](https://p5js.org/reference/#/p5/noLoop)). There are other special functions that are called automatically, such as [`mouseMoved()`](https://p5js.org/reference/#/p5/mouseMoved). However, you should only call functions that draw shapes directly (e.g. `ellipse()`) inside the `draw()` function.
	
	- You should also admire the convenience of the boolean variable `mouseIsPressed`, which evaluates to `true` whenever the mouse is pressed (by default the left key) and `false` whenever it is not. We also used other automatically updated variables here, namely `mouseX` and `mouseY`.
	
	- Unsurprisingly, `ellipse()` draws an ellipse. Our `draw()` function, in turn, translates to "every time I am called, check if the mouse is currently pressed; if it is, draw an 80-by-80 ellipse centered at its current location."
	
1. 







:sunglasses: GitHub markdown files [support emoji notation](http://www.emoji-cheat-sheet.com/)

Here's a resource for [github markdown](https://guides.github.com/features/mastering-markdown/).

## Use collapsible sections when you are giving away too much code
<details>
 <summary>Click to expand!</summary>
 
 ```js
 // some code
 console.log('hi');
 ```
</details>



## Summary / What you Learned

* [ ] can be checkboxes

## Reflection

*2 questions for the workshop participants to answer (very short answer) when they submit the workshop. These should try to get at something core to the workshop, the what and the why.*

* [ ] 2 reflection questions
* [ ] 2 reflection questions


## Resources
[p5.js Get Started](https://p5js.org/get-started/)
[p5.js Online Editor](https://editor.p5js.org/)

