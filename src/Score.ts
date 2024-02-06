// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Score extends Sprite {
  color: string
  font: string
  score: number
  x: number
  y: number
  constructor(x = 8, y = 20, color = '#ffffff') {
    super(x, y);
    this.color = color;
    this.font = '16px Arial';
    this.score = 0;
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  update(points: number) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;