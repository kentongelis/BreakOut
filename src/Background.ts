/* eslint-disable import/extensions */
import Sprite from './Sprite';

const canvas = document.getElementById('myCanvas') as HTMLInputElement | null

class Background extends Sprite {
// eslint-disable-next-line class-methods-use-this
  render(ctx: any) {
    ctx.beginPath();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
  }
}

export default Background;