/* eslint-disable import/extensions */
import Brick from './Brick.js';

class Bricks {
  constructor(x, y, width = 62, height = 20, color = '#000000') {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.rowCount = 5;
    this.columnCount = 6;
    this.padding = 10;
    this.offsetTop = 30;
    this.offsetLeft = 30;
    this.bricks = [];
    // eslint-disable-next-line no-plusplus
    for (let c = 0; c < this.columnCount; c++) {
      this.bricks[c] = [];
      // eslint-disable-next-line no-plusplus
      for (let r = 0; r < this.rowCount; r++) {
      // bricks[c][r] = { x: 0, y: 0, status: 1 };
        this.bricks[c][r] = new Brick();
      }
    }
  }

  render(ctx) {
    // eslint-disable-next-line no-plusplus
    for (let c = 0; c < this.columnCount; c++) {
      // eslint-disable-next-line no-plusplus
      for (let r = 0; r < this.rowCount; r++) {
        if (this.bricks[c][r].status) {
          const brickX = (c * (this.width + this.padding)) + this.offsetLeft;
          const brickY = (r * (this.height + this.padding)) + this.offsetTop;
          this.x = brickX;
          this.y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          if (c === 0) {
            ctx.fillStyle = '#FF0000';
          } else if (c === 1) {
            ctx.fillStyle = '#ff7700';
          } else if (c === 2) {
            ctx.fillStyle = '#ffdd03';
          } else if (c === 3) {
            ctx.fillStyle = '#13ff00';
          } else if (c === 4) {
            ctx.fillStyle = '#00b3ff';
          } else if (c === 5) {
            ctx.fillStyle = '#000aff';
          } else if (c === 6) {
            ctx.fillStyle = '#002cff';
          }
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Bricks;