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

    // shadow
    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, // left cut
        0, // right cut
        32, // width cut
        32, // height cut
        x * 16 - 8, // x place to draw in map with nudge
        y * 16 - 18, // y place to draw in map with nudge
        32, // width to draw
        32 // height to draw
      );
    };

    shadow.src = '/assets/images/characters/shadow.png';

    // hero
    const x = 5;
    const y = 6;
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, // left cut
        0, // right cut
        32, // width cut
        32, // height cut
        x * 16 - 8, // x place to draw in map with nudge
        y * 16 - 18, // y place to draw in map with nudge
        32, // width to draw
        32 // height to draw
      );
    };

    hero.src = '/assets/images/characters/people/hero.png';
  }
}

export { Overworld };
