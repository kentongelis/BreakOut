/* eslint-disable import/extensions */
import Sprite from './Sprite';

const canvas = document.getElementById('myCanvas') as HTMLInputElement | null

class Paddle extends Sprite {
  X: number
  height: number
  width: number
  color: string
  constructor(x: number, y: number, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color);
    this.X = ((canvas.width - this.width) / 2) + 60;
  }

  render(ctx: any) {
    ctx.beginPath();
    ctx.rect(this.X, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;