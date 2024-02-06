// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

const canvas = document.getElementById('myCanvas') as HTMLInputElement | null

class Lives extends Sprite {
  color: string
  lives: number
  font: string
  x: number
  y: number
  constructor(x = canvas.width - 65, y = 20, color = '#ffffff') {
    super(x, y);
    this.color = color;
    this.lives = 3;
    this.font = '16px Arial';
  }

  render(ctx: any) {
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