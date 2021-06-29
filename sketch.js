var hr , min ,sc
var scAngle,minAngle,hrAngle

function setup() {
  createCanvas(400,400);
 
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
  hr = hour();
  min=minute();
  sc=second();
  angleMode(DEGREES);
  
  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr % 12,0,12,0,360)
  minAngle=map(min,0,60,0,360)

  noFill()
  push()
  strokeWeight(10)
  stroke('red')
  arc(0,0,380,380,990,scAngle)
  pop()

  noFill()
  strokeWeight(10)
  stroke('blue')
  arc(0,0,320,320,990,hrAngle)

  noFill()
  strokeWeight(10)
  stroke('green')
  arc(0,0,350,350,990,minAngle)

  push()
  stroke(255,0,0);
  strokeWeight(7);
  rotate(scAngle)
  line(0,0,100,0)
  pop()

  push()
  stroke('green');
  strokeWeight(7);
  rotate(minAngle)
  line(0,0,75,0)
  pop()

  push()
  stroke('blue');
  strokeWeight(7);
  rotate(hrAngle)
  line(0,0,50,0)
  pop()
  
  
  drawSprites();
}

