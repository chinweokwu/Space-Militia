import Phaser from 'phaser';
import createButton from '../helpers/buttons';
// import { getCurrentScore } from '../helpers/scores';
// import loadScoreboard from '../helpers/ scoreboard';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {
    // retrive score data from the api
    // getCurrentScore().then(scores => loadScoreboard(scores, this));

    this.title = this.add.text(250, 150, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    createButton(380, 580, 'Main Menu', this);

    this.input.mouse.disableContextMenu();
    this.input.on('pointerdown', (pointer, gameObjects) => {
      if (pointer.leftButtonDown() && gameObjects.length > 0) {
        if (gameObjects[0].last.text === 'Main Menu') {
          this.scene.start('Title');
        }
      }
    });
  }
}