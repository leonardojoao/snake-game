let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] ={
  x: 8 * box,
  y: 8 * box,
}

function createBackground() {
  context.fillStyle = "#3CB371";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for(let i=0; i < snake.length; i++) {
    context.fillStyle = "#F0E68C";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

createBackground();
createSnake();
