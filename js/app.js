// Enemies our player must avoid

var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // If off the canvas, reset position of enemy bugs to move across again
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    // Checks for collision between player and enemy bugs
    //If the enemy bugs and player collide, then reset Player back to position (200,300)

    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.jump = 83;
    this.step = 101;
    this.speed = speed;
    this.x = x;
    this.y = y;
};


    // Prevent player from moving beyond canvas wall boundaries


    // Check for player reaching top of canvas and winning the game
    // Switch as an alternative to if-else statements
    //Use Console.log to check Player position on tiles (x, y)
Player.prototype.handleInput = function(input) {
  switch(input) {
    case 'left':
      if(this.x > 0){
        this.x -= this.step;
      }
      break;
    case 'up':
      if(this.y > 0){
        this.y -= this.jump;
        //console.log(this.x);
        //console.log(this.y);
        //console.log(this.jump);
      }
      break;
    case 'right':
    if(this.x < this.step*3){
      this.x += this.step;
    }
    break;
    case 'down':
      if(this.y < this.jump *4){
        this.y += this.jump;
      }
    break;
  }
};

//Win condition and reset Player position when Player reaches the water
// if this.y is less than zero, run alert box and reset player to original Position
//Note to self: Must uncomment player.update from engine.js for this to work


Player.prototype.update = function() {
  if (this.y === -35) {
    alert('Good job!');
    player.x = 200;
    player.y = 380;
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy = function(x, y, speed){
  this.x = 0;
  this.y = 0;
  this.sprite = 'images/enemy-bug-png';
  this.step = 100;
};
// Place the player object in a variable called player


// Position "y" where the enemies will are created

//Variables
var player = new Player(200, 380, 50);
var enemyPosition = [60, 140, 220];
var enemy;
var allEnemies = [];

//Creates three enemy bugs
enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
