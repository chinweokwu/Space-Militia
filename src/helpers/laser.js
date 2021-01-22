import Phaser from 'phaser';

export default class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'laser');
  }

  fire(x, y) {
    this.body.reset(x, y);
    this.setScale(0.5);
    this.setActive(true);
    this.setVisible(true);

    this.setVelocityY(-900);
  }
}