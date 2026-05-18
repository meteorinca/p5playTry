// Simple q5play game example
let player;
let coin;

function setup() {
  createCanvas(800, 600);
  
  // Create player sprite
  player = new Sprite();
  player.shape.circle(30);
  player.position.set(400, 300);
  player.color = '#00ff88';
  player.body.type = 'kinematic'; // Player-controlled
  
  // Create collectible coin
  coin = new Sprite();
  coin.shape.circle(15);
  coin.position.set(600, 200);
  coin.color = '#ffd700';
  coin.body.type = 'static';
  
  noStroke();
}

function draw() {
  background('#1a1a2e');
  
  // Move player with arrow keys or WASD
  let speed = 5;
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) player.position.x -= speed;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) player.position.x += speed;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) player.position.y -= speed;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) player.position.y += speed;
  
  // Keep player in bounds
  player.position.x = constrain(player.position.x, 30, width - 30);
  player.position.y = constrain(player.position.y, 30, height - 30);
  
  // Check coin collection
  if (player.collides(coin)) {
    coin.position.set(random(100, 700), random(100, 500));
  }
  
  // Draw instructions
  fill('#ffffff');
  textSize(20);
  textAlign(LEFT, TOP);
  text('Use Arrow Keys or WASD to move!', 20, 20);
  text('Collect the gold coin!', 20, 50);
}