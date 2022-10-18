let dino;
let count = 0;
let button;

function preload(){
  Dino.image = loadImage('img/dino.png');
  Cactus.image = loadImage('img/cactus.png');
}
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 500);
  dino = new Dino()
  textAlign(CENTER);
  button = createButton('again');
  button.position(width/2-15, height/2+10);
  button.mousePressed(gameRestart);
  button.hide();
}

function keyPressed(){
  if (key == ' '){
    dino.jump();
  }
}

function draw() {
    background(230, 230, 230);
    gameOn();
    text(parseInt(count/60), 10, 10);
}

function gameOn(){
  count += 1;
  Cactus.randomlyAdd();
  Cactus.cactus_array.forEach(c => {
    c.move();
    c.show();
    if(dino.hits(c)){
      gameOver()
    }
  });
  dino.move();
  dino.show();
}

function gameOver() {
  noLoop()
  text('Game Over', width/2, height/2);
  button.show();
}

function gameRestart(){
  count = 0;
  Cactus.cactus_array = [];
  button.hide();
  loop();
}


/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};
