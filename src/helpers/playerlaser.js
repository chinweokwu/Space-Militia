import Entity from './entity';

export default class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laser');
    this.body.velocity.y = -200;
  }
}