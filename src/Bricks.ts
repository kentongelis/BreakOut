/* eslint-disable import/extensions */
import Brick from './Brick';

class Bricks {
  width: number
  height: number
  color: string
  x: number
  y: number
  rowCount: number
  columnCount: number
  padding: number
  offsetTop: number
  offsetLeft: number
  bricks: any

  constructor(x: number, y: number, width = 30, height = 10, color = '#000000') {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.rowCount = 8;
    this.columnCount = 13;
    this.padding = 2;
    this.offsetTop = 30;
    this.offsetLeft = 30;
    this.bricks = [];
    // eslint-disable-next-line no-plusplus
    for (let c = 0; c < this.columnCount; c++) {
      this.bricks[c] = [];
      // eslint-disable-next-line no-plusplus
      for (let r = 0; r < this.rowCount; r++) {
      // bricks[c][r] = { x: 0, y: 0, status: 1 };
        this.bricks[c][r]= new Brick(0, 0);
      }
    }
  }

  render(ctx: any) {
    // eslint-disable-next-line no-plusplus
    for (let c = 0; c < this.columnCount; c++) {
      // eslint-disable-next-line no-plusplus
      for (let r = 0; r < this.rowCount; r++) {
        if (this.bricks[c][r].status) {
          const brickX = (c * (this.width + this.padding)) + this.offsetLeft;
          const brickY = (r * (this.height + this.padding)) + this.offsetTop;
          this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          if (r === 0) {
            ctx.fillStyle = '#FF0000';
          } else if (r === 1) {
            ctx.fillStyle = '#FF0000';
          } else if (r === 2) {
            ctx.fillStyle = '#ffa600';
          } else if (r === 3) {
            ctx.fillStyle = '#ffa600';
          } else if (r === 4) {
            ctx.fillStyle = '#31760e';
          } else if (r === 5) {
            ctx.fillStyle = '#31760e';
          } else if (r === 6) {
            ctx.fillStyle = '#ffde00';
          } else if (r === 7) {
            ctx.fillStyle = '#ffde00';
          }
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Bricks;