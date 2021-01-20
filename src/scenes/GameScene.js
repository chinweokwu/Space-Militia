import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('militia', '../assets/militia.jpg');
    this.load.image('cursor', 'assets/sprites/drawcursor.png');
  }

  create() {
    const militia = this.physics.add.image(200, 300, 'militia');
    const cursor = this.add.image(0, 0, 'cursor').setVisible(false);
    this.input.on('pointermove', (pointer) => {
      cursor.setVisible(true).setPosition(pointer.x, pointer.y);
      this.physics.moveToObject(militia, pointer, 240);
      Phaser.Utils.Array.Each(
        this.physics.moveToObject,
        this.physics,
        pointer, 120,
      );
    }, this);
  }
}
