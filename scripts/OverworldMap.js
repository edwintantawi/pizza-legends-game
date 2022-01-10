import { GameObject } from './GameObject.js';

class OverworldMap {
  constructor(config) {
    const { gameObject, lowerSrc, upperSrc } = config;

    this.gameObject = gameObject;

    this.lowerImage = new Image();
    this.lowerImage.src = lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

export { OverworldMap };

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: '/assets/images/maps/DemoLower.png',
    upperSrc: '/assets/images/maps/DemoUpper.png',
    gameObject: {
      hero: new GameObject({ x: 5, y: 6 }),
      npcA: new GameObject({
        x: 7,
        y: 9,
        src: '/assets/images/characters/people/npc1.png',
      }),
    },
  },
  Kitchen: {
    lowerSrc: '/assets/images/maps/KitchenLower.png',
    upperSrc: '/assets/images/maps/KitchenUpper.png',
    gameObject: {
      hero: new GameObject({ x: 3, y: 5 }),
      npcA: new GameObject({
        x: 9,
        y: 6,
        src: '/assets/images/characters/people/npc2.png',
      }),
      npcB: new GameObject({
        x: 10,
        y: 8,
        src: '/assets/images/characters/people/npc3.png',
      }),
    },
  },
};
