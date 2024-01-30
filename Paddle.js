/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

const canvas = document.getElementById('myCanvas');

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 10, color = '#000000') {
    super(x, y, width, height, color);
    this.X = (canvas.width - this.width) / 2;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.X, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;