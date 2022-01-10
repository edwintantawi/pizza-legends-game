import { OverworldMap } from './OverworldMap.js';

class Overworld {
  constructor(config) {
    const { element } = config;

    this.element = element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas

      this.map.drawLowerImage(this.ctx);

      Object.values(this.map.gameObject).forEach((object) => {
        object.sprite.draw(this.ctx);
      });

      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        console.log('Stepping!!!');
        step();
      });
    };

    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
    this.startGameLoop();
  }
}

export { Overworld };
