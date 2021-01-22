import Phaser from 'phaser';

export default class ShipLaser extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('laser');
    this.setPosition(x, y);
    this.speed = 10;
    this.scene = scene;
  }

  // handleHit(laserSprite, enemySprite) {
  //   enemySprite.destroy(true);
  //   laserSprite.destroy(true);
  // }

  preUpdate(time, delta) {
    // eslint-disable-next-line eqeqeq
    if (this.active == false) { return; }
    super.preUpdate(time, delta);
    this.y -= this.speed;
  }
}