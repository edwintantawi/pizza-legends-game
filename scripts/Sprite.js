class Sprite {
  constructor(config) {
    const { animations, currentAnimation, gameObject, src } = config;

    this.image = new Image();
    this.image.src = src;
    this.image.onload = () => (this.isLoaded = true);

    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = '/assets/images/characters/shadow.png';
    }
    this.shadow.onload = () => (this.isShadowLoaded = true);

    this.animations = animations || { idleDown: [[0, 0]] };
    this.currentAnimation = currentAnimation || 'idleDown';
    this.currentAnimationFrame = 0;
    this.gameObject = gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}

export { Sprite };
