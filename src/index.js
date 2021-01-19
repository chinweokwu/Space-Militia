import Phaser from 'phaser';
import config from './config';
import game from './scenes/game-scene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', game);
    this.scene.start('Game');
  }
}

window.game = new Game();
