// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

const canvas = document.getElementById('myCanvas');

class Lives extends Sprite {
  constructor(x = canvas.width - 65, y = 20, color = '#000000') {
    super(x, y, color);
    this.color = color;
    this.lives = 3;
    this.font = '16px Arial';
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = 3;
  }
}

export default Lives;