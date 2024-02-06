/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Brick extends Sprite {
  status: boolean;
  constructor(x: number, y: number, width = 62, height = 20, color = '#000000') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true;// adds a new property
  }
}

export default Brick;