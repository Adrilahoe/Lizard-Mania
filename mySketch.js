//Adriana Suarez-Cariel
//Pascal Huynh
//Web & FX, 502-A22-LA, sect. 00002
//Lizard Mania
//https://openprocessing.org/sketch/1886710

// (Instruction) Click on the space bar to start the game. Afterward, press on the circles to accumulate points. 
//Be careful as if your score is lower than 0 it is game over. Once you have accumulated 5 points, you win. 
//Even if you win or lose, press the space bar and it will automatically restart the game.    

//(Analysis/artist statement) This interaction is made for fun purposes. 
//By having the lizard be at the center of the mouse, the player gets to feed it and accumulate points. 
//It tells the story of a lizard looking for food as it needs it to survive. 
//The simplicity of it all might seem underwhelming but shows how even the simplest of things are crucial to one's survival.
//Don't forget to eat, or it might just be game over.

let chapter;
let lizard;
let circleX;
let circleY;
let circleSize;
let circlePressed;
var count=0

function preload() {
  lizard = loadImage("lizard.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  chapter=0;
  speedX=random(10);
  speedY=random(10);
  circlePressed = false;
  spawnCircle();
}

function draw() {
  background(124,200,0);
	//counter set up
	textSize(100);
	text(count,100, 100, 400, 400);
	
  if(chapter===0) {	
    textAlign(CENTER);
    fill(255);
    textSize(40);
    text("PRESS THE SPACEBAR TO START",750,400);
		
  }
	//ChatGPT made it possible to keep the lizard image without it leaving a trail on the background by clearing the frames when 
	//moving the mouse.
  else if(chapter===1){ 
    clear();  // Clear the canvas at the start of each frame	
		
		fill (255);
		textSize(100);
	text(count,100, 100, 400, 400);
    imageMode(CENTER);
    image(lizard, mouseX, mouseY, 200, 200);
    if (circlePressed) {
      spawnCircle();
      circlePressed = false;
		
    }
    fill(0, 0, 0);
    ellipse(circleX, circleY, circleSize);
  }	
	//win screen
  else if(chapter===2){
    background(48,138,44);
			 fill(124,200,0);
    textSize(40);
    text("CONGRATS YOU WON",750,400);
		  text("PRESS THE SPACEBAR TO START AGAIN",750,500);
  }
	//lost screen
	else if(chapter===3){
    background(55);
		 fill(170);
    textSize(40);
    text("GAME OVER",750,400);
		  text("PRESS THE SPACEBAR TO START AGAIN",750,500);
  }
}

function spawnCircle() {
  circleX = random(width);
  circleY = random(height);
  circleSize = random(20, 100);
}

function mousePressed() {
//points
  if (chapter === 1 && dist(mouseX, mouseY, circleX, circleY) < circleSize/2) {
    circlePressed = true; count+=1
  } else { count-=1 }
	
	if (count===-1) { chapter=3
}
	
	//success
	if (count===5) { chapter=2
} }

function keyPressed() {
	//opening
  if (chapter === 0 && keyCode === 32) {
    chapter = 1;
  }
	//sucess screen restart
	 if (chapter === 2 && keyCode === 32) {
    chapter = 0; count=0;
  }
	//lost screen restart
	 if (chapter === 3 && keyCode === 32) {
    chapter = 0; count=0;
  }
}