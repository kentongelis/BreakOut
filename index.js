/* eslint-disable import/extensions */
import Ball from './Ball.js';
import Paddle from './Paddle.js';
import Background from './Background.js';
import Score from './Score.js';
import Lives from './Lives.js';
import Bricks from './Bricks.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const ball = new Ball(200, 200, 10);
const paddle = new Paddle();
const bricks = new Bricks();
const background = new Background();
const score = new Score();
const lives = new Lives();

let rightPressed = false;
let leftPressed = false;

// eslint-disable-next-line no-use-before-define
document.addEventListener('keydown', keyDownHandler, false);
// eslint-disable-next-line no-use-before-define
document.addEventListener('keyup', keyUpHandler, false);
// eslint-disable-next-line no-use-before-define
document.addEventListener('mousemove', mouseMoveHandler, false);

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.X = relativeX - paddle.width / 2;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function collisionDetection() {
  // eslint-disable-next-line no-plusplus
  for (let c = 0; c < bricks.columnCount; c++) {
    // eslint-disable-next-line no-plusplus
    for (let r = 0; r < bricks.rowCount; r++) {
      const b = bricks.bricks[c][r];
      if (b.status === true) {
        if (ball.x > b.x
          && ball.x < b.x + bricks.width
          && ball.y > b.y
          && ball.y < b.y + bricks.height) {
          ball.dy = -ball.dy;
          b.status = false;
          // eslint-disable-next-line no-plusplus
          if (r === 0) {
            score.update(7);
          } else if (r === 1) {
            score.update(7);
          } else if (r === 2) {
            score.update(5);
          } else if (r === 3) {
            score.update(5);
          } else if (r === 4) {
            score.update(3);
          } else if (r === 5) {
            score.update(3);
          } else if (r === 6) {
            score.update(1);
          } else if (r === 7) {
            score.update(1);
          } if (score.score === 448) {
            // eslint-disable-next-line no-alert
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.render(ctx);
  ball.move();
  bricks.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  background.render(ctx);
  collisionDetection();

  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  } if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.X && ball.x < paddle.X + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      // eslint-disable-next-line no-plusplus
      lives.loseLife();
      if (lives.lives === 0) {
        // eslint-disable-next-line no-alert
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.X = (canvas.width - paddle.width) / 2;
      }
    }
  }

  if (rightPressed && paddle.X < canvas.width - paddle.width) {
    paddle.X += 7;
  } else if (leftPressed && paddle.X > 0) {
    paddle.X -= 7;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  requestAnimationFrame(draw);
}

draw();