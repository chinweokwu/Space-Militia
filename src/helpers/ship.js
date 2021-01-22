/* eslint-disable no-plusplus */
/* eslint-disable no-array-constructor */
import Phaser from 'phaser';
import ShipLaser from './shiplaser';

export default class Ship extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('player');
    this.setPosition(x, y);

    this.scene = scene;
    this.deltaX = 5;
    this.deltaY = 5;
    this.lasers = new Array();
    this.lastShot = new Date().getTime();
    this.shotFrequency = 250;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.deltaX;
    }
  }

  moveRight() {
    if (this.x < 800) {
      this.x += this.deltaX;
    }
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= this.deltaY;
    }
  }

  moveDown() {
    if (this.y < 600) {
      this.y += this.deltaY;
    }
  }

  fireLasers() {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastShot > this.shotFrequency) {
      const shipLaser = new ShipLaser(this.scene, this.x, this.y);
      this.scene.add.existing(shipLaser);
      this.lasers.push(shipLaser);
      this.lastShot = currentTime;
    }
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    let i = 0;
    let j = 0;
    const lasersToRemove = new Array();

    for (i = 0; i < this.lasers.length; i++) {
      this.lasers[i].update();

      if (this.lasers[i].y <= 0) {
        lasersToRemove.push(this.lasers[i]);
      }
    }

    for (j = 0; j < lasersToRemove.length; j++) {
      const laserIndex = this.lasers.indexOf(lasersToRemove[j]);
      this.lasers.splice(laserIndex, 1);
      lasersToRemove[j].destroy();
    }
  }
}
