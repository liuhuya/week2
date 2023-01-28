
let canvas;
let button;
let slider;
let displayState = 0;

// let branches = [];

// var paletteSet = [[0.13298242,0.218273891,0.29128793]];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  addGUI();
  createCanvas(1100, 1100);
  background(255);
  frameRate(100);

    // var preBranchL = random(200,280);

    // for(let i = 0;i < 10;i++){
    //     branches[i] = new Branch(width/2,height-40,preBranchL);
    //     if (preBranchL + 40 > 280) {
    //         preBranchL -= random(20,40);
    //     }else if (preBranchL - 40 < 200) {
    //         preBranchL += random(20,40);
    //     }else {
    //         preBranchL += random([-1,+1])*random(20,40);
    //     }
    // }
  
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

 
function draw() {
  noStroke();
  push();
  let rc = color(random(255),random(255),random(255));
  // for(let i = 0;i < width;i++){
  //   for(let j = 0;j < height;j++){
  //   //   // 绘制背景 draw background
  //   //   if (dist(i,j,width/2,height/2)>150) {
  //   //   let ra = constrain(map(j,0,height,-100,150),0,150)+randomGaussian(0,10);
  //   //             rc.setAlpha(ra);
  //   //   fill(rc);
  //   //   noStroke();
  //   //   ellipse(i,j,1,1);
  //   //   }else {
  //   //   // 绘制小球 draw little balls make the background gradient
  //   //   let ra = constrain(map(j,0,height,100,-50),0,150)+randomGaussian(0,10);
  //   //             rc.setAlpha(ra);
  //   //   fill(rc);
  //   //   noStroke();
  //   //   ellipse(i,j,2,2);
  //   //  }
  //   // }
  //  }
    // pop();
  
  //   push();
  //   translate(0,-150);
  // pop();
  
  

  //Smooth movement of the circle by overlaying the background
  background(0);
  fill(255)
  noStroke()
  translate(width/2,height/2)
  

//  The wave of the sin function of the circle
//  for(let x=0; x<width; x+=20){
    let span = map(mouseX/10,0,width,1,100,true);
    let freq = map(mouseY/5,0,height,5,100,true);
    
//     for(let x=0; x<width; x+=span){
//     let y=sin(x/freq+frameCount/100)*height/3;
    
    for(let x=0; x<width; x+=span){
    push()
      rotate(x/width*2*PI) // Rotating coordinate system
      let y=sin(x/freq+frameCount/100)*height/3 // Setting the height of the waves
      translate(y,0) // Move the rotated coordinate system y distance on the X axis
      // ellipse(x,y,10);
      
      //color
      for (let i = 0; i<900; i+=5){
        
        let r = 127+127*sin(i*0.001+frameCount);
        let g = 127+127*sin(i*0.012+frameCount);
        let b = 127+127*sin(i*0.01+frameCount);
        
        fill(r, g, b);
      }
      if(displayState == 0){
        ellipse(0,0,5);
      }else{
        rect(0,0,6,6);
      }
    
    pop();

  // }
  
  //   for (let i = 0; i < branches.length; i++) {
  //     push();

  //     let roA = map(mouseX,0,width,PI,PI/30); // Control the rotation angle of the branch according to the mouse

  //     // Rotate the branch by a certain angle around its third node from bottom to top
  //     translate(branches[i].points[2].x,branches[i].points[2].y);
  //     var angle = map(i,0,branches.length-1,-5*roA,5*roA);
  //     rotate(angle);
  //     translate(-branches[i].points[2].x,-branches[i].points[2].y);

  //     push();
  //     translate(100,100);
  //     // rotate();
  //     branches[i].display(); // Draw branches
  //     pop();
  // }
  
}

// class Point {
//     constructor(tempX,tempY) {
//         this.x = tempX;
//         this.y = tempY;
//     }
// }

// class Branch {

  // display(){
  //     push();
  //     noFill();
  //     stroke(75,87,62,random(100,255));
  //     strokeWeight(6);
  //     for(let i = 2;i < this.points.length;i++){  //Use different strokeWeights to draw branches, the higher up the tree the thinner the branch is
  //         strokeWeight(6-6/this.points.length*i);
  //         line(this.points[i-1].x,this.points[i-1].y,this.points[i].x,this.points[i].y);
  //     }
  //     pop();
  // }
}

function addGUI()
{

if(displayState == 0)
{
    button = createButton("Change to Square");
}else if(displayState == 1){
    button = createButton("Change to Circle");
}

button.addClass("button");

//Add the play button to the parent gui HTML element
button.parent("gui-container");

//Adding a mouse pressed event listener to the button 
button.mousePressed(handleButtonPress); 
}


function handleButtonPress()
{
    
  if(displayState < 1)
  {
    displayState++;
  }else{
    displayState = 0;
  }

  if(displayState == 0)
  {
      button.html("Change to Square");
  }else if(displayState == 1){
      button.html("Change to Circle");
  }
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}