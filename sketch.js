var paddle1, paddle2, box1, box2, box3, ball, edges, edge1, edge2
var score1 = 0
var score2 = 0
function setup() {
  createCanvas(2500,1300);
  paddle1 = createSprite(1500, 100, 100, 8 )
  paddle1.shapeColor = rgb(160, 75, 100)
  paddle2 = createSprite(1500, 1250, 100, 8 )
  paddle2.shapeColor = rgb(160, 75, 100)
  box1 = createSprite(1500, 650, 75, 75)
  box1.shapeColor = "brown"
  box2 = createSprite(1200, 650, 75, 75)
  box2.shapeColor = "brown"
  box3 = createSprite(900, 650, 75, 75)
  box3.shapeColor = "brown"
  ball = createSprite(1500, 200, 10, 10)
  ball.shapeColor = "black"
  ball.velocityX = 8
  ball.velocityY = 6
  box1.velocityX = 4
  box1.velocityY = -4
  box2.velocityX = -4
  box2.velocityY = 4
  box3.velocityX = 2
  box3.velocityY = -2
  edge1 = createSprite(1250, 10, 2500, 2)
  edge2 = createSprite(1250, 1280, 2500, 2)
}

function draw() {
  background(0,50, 255);
  edges = createEdgeSprites()
  ball.bounceOff(edges)
  ball.bounceOff(box1)
  ball.bounceOff(box2)
  ball.bounceOff(box3)
  box1.bounceOff(edges)
  box2.bounceOff(edges)
  box3.bounceOff(edges)
  paddle1.x = mouseX
  if (keyDown(LEFT_ARROW)) {
    paddle2.x = paddle2.x - 10
  }
  if (keyDown(RIGHT_ARROW)) {
    paddle2.x = paddle2.x + 10
  }
  ball.bounceOff(paddle1)
  ball.bounceOff(paddle2)
  if(ball.isTouching(edge1)) {
    score1 = score1 + 0.25
  }
  if(ball.isTouching(edge2)) {
    score2 = score2 + 1/3
  }
  if(ball.velocityX > 50) {
    ball.velocityX = 8
  }
  if(ball.velocityY > 50) {
    ball.velocityY = 6 
  }
  if(score1 >5||score2 > 5) {
    score1 = 0
    score2 = 0
    ball.velocityX = 0
    ball.velocityY = 0
    box1.velocityX = 0
    box1.velocityY = 0
    box2.velocityX = 0
    box2.velocityY = 0
    box3.velocityX = 0
    box3.velocityY = 0
    
  }
  if(score2 > 5) {
    textSize(30)
    text("Player won has won the game.", 1500, 650)
  }
 // score1.shapeColor = 'white'
  text('SCORE1: ' + score1, 700, 600)
 // score2.shapeColor = 'white'
  text('SCORE2: ' + score2, 700, 630)

  drawSprites();
  
}

