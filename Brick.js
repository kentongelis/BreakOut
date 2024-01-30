/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, width = 62, height = 20, color = '#000000') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true;// adds a new property
  }
}

export default Brick;