export class Whoprigon extends Phaser.Scene {
    constructor() {
        super({ key: 'whoprigon' });
    }
    preload() {
        this.load.image('whoprigon', 'images/whatprigon.png');
    }

    create() {
        //interface com elementos html
        let referencia = this;
        this.mainimage = this.add.image(480, 1080, 'whoprigon');
        this.mainimage.setScale(0.2);
    }

    update() {
        // Atualize a lógica do jogo aqui
        this.mainimage.y -= 0.5;
        if (this.mainimage.y == 0) this.scene.start("tutorial");
    }
}
