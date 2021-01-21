import Phaser from 'phaser';
import ass1 from '../assets/asteriod1.jpeg';
import ass2 from '../assets/asteriod2.jpeg';
import ass3 from '../assets/asteriod3.jpeg';
import ass4 from '../assets/asteriod4.jpeg';
import laser from '../assets/laser.png';
import workspace from '../assets/warspace.png';
import workspace1 from '../assets/warspace3.png';
import player from '../assets/soliders.png';
import instructionBg from '../assets/instruction.png';
import boom from '../assets/boom.png';
import logo from '../assets/logo.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // add background image
    const bg = this.add.image(400, 320, 'background');
    bg.setDisplaySize(800, 640);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.7);
    progressBox.fillRect(200, 270, 400, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 70,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 24,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', value => {
      percentText.setText(`${Math.floor(value * 100, 1)}%`);
      progressBar.clear();
      progressBar.fillStyle(0x09ff00, 1);
      progressBar.fillRect(210, 280, 380 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', () => {
      assetText.setText('Loading space Miltia');
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      loadingText.setText('Done!');
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);

    // load assets needed
    this.load.image('logo', logo);
    this.load.image('asteriod1', ass1);
    this.load.image('titleBug', ass2);
    this.load.image('asteriods3', ass3);
    this.load.image('base', ass4);
    this.load.image('laser', laser);
    this.load.image('warspace', workspace);
    this.load.image('titleBackground', workspace1);
    this.load.image('player', player);
    this.load.image('instructBg', instructionBg);
    this.load.spritesheet('boom', boom, {
      frameWidth: 122,
      frameHeight: 136,
      endFrame: 0,
    });
  }

  init() {
    this.readyCount = 0;
  }

  // start title scene when finish loading
  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}