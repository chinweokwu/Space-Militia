/* eslint-disable no-plusplus */
/* eslint-disable no-array-constructor */
import Phaser from 'phaser';
import Ship from '../helpers/ship';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.cameras.main.setBackgroundColor(0x1D1923);
    this.warspace = this.add.tileSprite(400, 320, 800, 640, 'warspace');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.myShip = new Ship(this, 400, 500);
    this.add.existing(this.myShip);
    this.enemies = this.physics.add.group();
    this.enemies2 = new Array();


    let k = 0;
    for (k = 0; k < 21; k++) {
      const x = Math.random() * 800;
      const y = Math.random() * 400;

      this.enemy = new Enemy1(this, x, y);
      this.add.existing(this.enemy);
      this.enemies.add(this.enemy);
      this.enemies2.push(this.enemy);
    }
  }

  update() {
    this.warspace.tilePositionY += 5;
    if (this.cursors.space.isDown) {
      this.myShip.fireLasers();
    }

    if (this.cursors.left.isDown) {
      this.myShip.moveLeft();
    }

    if (this.cursors.right.isDown) {
      this.myShip.moveRight();
    }

    if (this.cursors.up.isDown) {
      this.myShip.moveUp();
    }

    if (this.cursors.down.isDown) {
      this.myShip.moveDown();
    }

    this.myShip.update();
  }
}
