var hr , min ,sc
var scAngle,minAngle,hrAngle

function setup() {
  createCanvas(400,400);
 
}

function draw() {
  background(255,255,255);  
  hr = hour();
  min=minute();
  sc=second();
  angleMode(DEGREES);
  
  scAngle=map(sc-15,0,60,0,360)
  hrAngle=map(hr-3,0,12,0,360)
  minAngle=map(min-15,0,60,0,360)

  noFill()
  strokeWeight(10)
  stroke('red')
  arc(200,200,380,380,990,scAngle)

  noFill()
  strokeWeight(10)
  stroke('blue')
  arc(200,200,320,320,990,hrAngle)

  noFill()
  strokeWeight(10)
  stroke('green')
  arc(200,200,350,350,990,minAngle)

  stroke(255,0,0);
  strokeWeight(7);
  line(200,200,100,100,scAngle)

  stroke('green');
  strokeWeight(7);
  line(200,200,200,105,minAngle)

  stroke('blue');
  strokeWeight(7);
  line(200,200,300,160,hrAngle)
  
  
  
  drawSprites();
}
