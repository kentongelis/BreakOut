// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Score extends Sprite {
  constructor(x = 8, y = 20, color = '#ffffff') {
    super(x, y, color);
    this.color = color;
    this.font = '16px Arial';
    this.score = 0;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  update(points) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;