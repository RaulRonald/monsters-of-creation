import { Mainmenu } from "./mainmenu.js";
import { Tutorial } from "./tutorial.js";
import { Boss0 } from "./bosses.js";
// definição da tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: document.querySelector('.game-container'), 
    scene: null,
    player_name : null
};
//aderindo a tela ao jogo
export var game = new Phaser.Game(config);
//adicionando cenas ao game
game.scene.add('mainmenu', new Mainmenu());
game.scene.add('tutorial', new Tutorial());
game.scene.add('boss0', new Boss0());
//iniciandio a primeira cena
game.scene.start('mainmenu');
