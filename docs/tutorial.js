import { Button } from "./UIelements.js";
export class Tutorial extends Phaser.Scene {
    constructor() {
        super({ key: 'tutorial' });
    }
    preload() {
        this.load.image('startbutton3', 'images/start_button4.png');
        this.load.image('spacerune', 'images/space_rune.png');
        this.load.image('liferune', 'images/life_rune.png');
        this.load.image('realityrune', 'images/reality_rune.png');
        this.load.image('energyrune', 'images/energy_rune.png');
        this.load.image('timerune', 'images/time_rune.png');

    }

    create() {
        //interface com elementos html
        let referencia = this;
        let texto0 = this.add.text(5, 5, 'Aqui abaixo nos temos os seguintes elementos respectivamente : \n SPACE              LIFE                REALITY             ENERGY          TIME', { fontSize: '16px', fill: '#ffffff' });
        this.space = this.add.image(50, 75, 'spacerune');
        this.life = this.add.image(250, 75, 'liferune');
        this.reality = this.add.image(450, 75, 'realityrune');
        this.energy = this.add.image(650, 75, 'energyrune');
        this.time = this.add.image(850, 75, 'timerune');
        let texto1 = this.add.text(5, 150, 'Toda rodada podera escolher 3 desses elementos, sendo que toda rodada \nvoce ira curar e escolher se aplicara dano ao seu inimigo, assim temos : \n SPACE : ira aplicar dano nesta rodada \n LIFE : aumenta a sua cura por rodada \n REALITY : aumenta o seu dano que sera aplicado \n ENERGY : diminuira o dano de seu inimigo \n TIME : reduz a cura de seu inimigo', { fontSize: '16px', fill: '#ffffff' });
        let Button3 = new Button(this, 850, 420, 'startbutton3', '', () => { referencia.scene.start('boss0'); });
    }

    update() {
        // Atualize a lógica do jogo aqui
    }
}
