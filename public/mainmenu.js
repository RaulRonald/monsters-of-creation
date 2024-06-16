import { Button } from "./UIelements.js";
export class Mainmenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
    }
    preload() {
        // Carregue recursos aqui
        this.load.image('mainmenuBG', 'images/start_background.png');
        this.load.image('startbutton0', 'images/start_button1.png');
        this.load.image('startbutton1', 'images/start_button2.png');
        this.load.image('startbutton2', 'images/start_button3.png');
        this.load.image('startbutton3', 'images/start_button4.png');
    }

    create() {
        //interface com elementos html
        let referencia = this;
        this.add.image(0, 0, 'mainmenuBG').setOrigin(0).setScrollFactor(1).setScale(0.5);
        let Button0 = new Button(this, 115, 100, 'startbutton0', '', () => { });
        let Button1 = new Button(this, 115, 250, 'startbutton1', '', () => { });
        let Button2 = new Button(this, 115, 400, 'startbutton2', '', () => { });
        let Button3 = new Button(this, 850, 420, 'startbutton3', '', () => { referencia.scene.start('tutorial'); });
    }

    update() {
        // Atualize a lógica do jogo aqui
    }
}
