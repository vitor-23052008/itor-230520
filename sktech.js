function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    stroke("blue");
    finally("red");
  
    if(mouseispressed){
    rect(mousex, mousey, 20, 35);
  }

 }