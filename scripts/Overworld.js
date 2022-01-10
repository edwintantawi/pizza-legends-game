import { GameObject } from './GameObject.js';

class Overworld {
  constructor(config) {
    const { element } = config;

    this.element = element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };

    image.src = '/assets/images/maps/DemoLower.png';

    const hero = new GameObject({ x: 5, y: 6 });
    const npcA = new GameObject({
      x: 7,
      y: 9,
      src: '/assets/images/characters/people/npc1.png',
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npcA.sprite.draw(this.ctx);
    }, 200);
  }
}

export { Overworld };
