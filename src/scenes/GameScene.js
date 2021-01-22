import Phaser from 'phaser';
import LaserGroup from '../helpers/laserGroup';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.cameras.main.setBackgroundColor(0x1D1923);
    this.warspace = this.add.tileSprite(400, 320, 800, 640, 'warspace');

    this.laserGroup = new LaserGroup(this);
    this.addShip();
    this.addEvents();
  }

  addShip() {
    const centerX = this.cameras.main.width / 2;
    const bottom = this.cameras.main.height;
    this.ship = this.add.image(centerX, bottom - 90, 'player');
    this.ship.setScale(0.61);
  }

  addEvents() {
    // Moving the mouse should move the ship
    this.input.on('pointermove', (pointer) => {
      this.ship.x = pointer.x;
    });

    // Clicking the mouse should fire a bullet
    this.input.on('pointerdown', () => {
      this.fireBullet();
    });

    // Firing bullets should also work on enter / spacebar press
    this.inputKeys = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),
    ];
  }

  fireBullet() {
    this.laserGroup.fireBullet(this.ship.x, this.ship.y - 20);
  }

  update() {
    //  Scroll the background
    this.warspace.tilePositionY += 5;
    // Loop over all keys
    this.inputKeys.forEach(key => {
      // Check if the key was just pressed, and if so -> fire the bullet
      if (Phaser.Input.Keyboard.JustDown(key)) {
        this.fireBullet();
      }
    });
  }
}
