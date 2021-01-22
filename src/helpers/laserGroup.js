import Phaser from 'phaser';
import Laser from './laser';

export default class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      key: 'laser',
      active: false,
      visible: false,
      classType: Laser,
    });
  }

  fireBullet(x, y) {
    const laser = this.getFirstDead(true);

    if (laser) {
      laser.fire(x, y);
    }
  }
}