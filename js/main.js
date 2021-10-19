let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";

snake[0] ={
  x: 8 * box,
  y: 8 * box,
}

document.addEventListener("keydown", updateDirection)

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

function moveSnake() {
  let snakeX = snake[0].x
  let snakeY = snake[0].y

  switch(direction) {
    case "right":
      snakeX += box;
      break;
    case "left":
      snakeX -= box;
      break;
    case "up":
      snakeY -= box;
      break;
    case "down":
      snakeY += box;
      break;
  }

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY,
  }

  snake.unshift(newHead);
}

function updateDirection(event) {
  switch(true) {
    case event.keyCode == 37 && direction != "right":
      direction = "left";
      break;
    case event.keyCode == 38 && direction != "down":
      direction = "up";
      break;
    case event.keyCode == 39 && direction != "left":
      direction = "right";
      break;
    case event.keyCode == 40 && direction != "up":
      direction = "down";
      break;
  }
}

function crossWallRule() {
  switch(true) {
    case snake[0].x > 15 * box && direction == "right":
      snake[0].x = 0;
      break;
    case snake[0].x < 0 && direction == "left":
      snake[0].x = 16 * box;
      break;
    case snake[0].y < 0  && direction == "up":
      snake[0].y = 16 * box;
      break;
    case snake[0].y > 15 * box && direction == "down":
      snake[0].y = 0;
      break;
  }
}

function startGame() {
  createBackground();
  crossWallRule();
  createSnake();
  moveSnake();
}

let game = setInterval(startGame, 100);
