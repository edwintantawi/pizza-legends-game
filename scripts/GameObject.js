import { Sprite } from './Sprite.js';

class GameObject {
  constructor(config) {
    const { x, y, src } = config;

    this.x = x || 0;
    this.y = y || 0;
    this.sprite = new Sprite({
      src: src || '/assets/images/characters/people/hero.png',
      gameObject: this,
    });
  }
}

export { GameObject };
