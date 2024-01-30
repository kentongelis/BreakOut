/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

const canvas = document.getElementById('myCanvas');

class Background extends Sprite {
// eslint-disable-next-line class-methods-use-this
  render(ctx) {
    ctx.beginPath();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
  }
}

export default Background;