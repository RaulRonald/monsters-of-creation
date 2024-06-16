import { Button } from "./UIelements.js";
import { Player } from "./player.js";
export class Boss0 extends Phaser.Scene {
    constructor() {
        super({ key: 'boss0' });
    }
    preload() {
        //carregando imagens estaticaas
        //runas
        this.load.image('spacerune', 'images/space_rune.png');
        this.load.image('liferune', 'images/life_rune.png');
        this.load.image('realityrune', 'images/reality_rune.png');
        this.load.image('energyrune', 'images/energy_rune.png');
        this.load.image('timerune', 'images/time_rune.png');
        this.load.image('createrune', 'images/create_rune.png');
        this.load.image('userune', 'images/use_rune.png');
        this.load.image('aceleraterune', 'images/acelerate_rune.png');
        this.load.image('harmonyrune', 'images/harmony_rune.png');
        this.load.image('substancerune', 'images/substance_rune.png');
        this.load.image('controlrune', 'images/control_rune.png');
        this.load.image('limborune', 'images/limbo_rune.png');
        this.load.image('inanitionrune', 'images/inanition_rune.png');
        this.load.image('mirrorrune', 'images/mirror_rune.png');
        this.load.image('caosrune', 'images/caos_rune.png');
        //sprite
        this.load.image('prigonstopped', 'assets/sprites/prigon_sprite_sheets/frame0.png');
        this.load.image('lifecasul', 'assets/sprites/prigon_sprite_sheets/life_casul.png');
        this.load.image('enemylifebar', 'assets/sprites/prigon_sprite_sheets/enemy_lifebar.png');
        // Carregando spritesheet
        this.load.spritesheet('prigonidle', 'assets/sprites/prigon_sprite_sheets/prigon_stopped_spsh.png', {
            frameWidth: 960,
            frameHeight: 540
        });
        this.load.spritesheet('prigondamaged', 'assets/sprites/prigon_sprite_sheets/prigon_damaged_spsh.png', {
            frameWidth: 960,
            frameHeight: 540
        });
    }

    create() {
        //static sprites
        this.lifebar = this.add.image(480, 50, 'enemylifebar');
        this.add.image(480, 50, 'lifecasul');
        this.lifebarw = this.lifebar.width;
        //animações
        this.anims.create({
            key: 'prigonidle',
            frames: this.anims.generateFrameNumbers('prigonidle', { start: 0, end: 29 }),
            frameRate: 10, // Quadros por segundo
            repeat: -1 // -1 para repetir infinitamente
        });
        this.anims.create({
            key: 'prigondamaged',
            frames: this.anims.generateFrameNumbers('prigondamaged', { start: 0, end: 29 }),
            frameRate: 30, // Quadros por segundo
            repeat: 0 // -1 para repetir infinitamente
        });
        //monster configs
        this.background = this.add.sprite(480, 270, 'prigonstopped');
        this.background.play('prigonidle');
        //monster animations configs
        this.background.on('animationcomplete', function (currentAnim, currentFrame, sprite) {
            if (currentAnim.key === 'prigondamaged') {

                referencia.background.play('prigonidle');
            }
        }, this);
        //monster configs
        this.maxlife = 1000;
        this.life = this.maxlife;
        this.speed = 1;
        this.cure = 1;
        this.damage = 1;
        this.resistence = 1;
        this.precision = 0.5;
        this.constitution = 1;
        //player configs
        this.player = new Player(this, 0, 0);
        //botões
        this.hatk = [];
        let referencia = this;
        /* 1 CREATEITEM : creation
        * 2 USEITEM : use
        * 3 DANO:energy
        * 4 BUFFCURA:life
        * 5 BUFFDANO:reality
        * 6 BUFFSPEED:acelerate
        * 7 BUFFRESISTENCE:harmony
        * 8 BUFFPRECISION:space
        * 9 BUFFCONSTITUTION:substance
        * 10 DEBUFFDANO:control
        * 11 DEBUFFCURA:time
        * 12 DEBUFFSPEED:limbo
        * 13 DEBUFFRESISTENCE:inanition
        * 14 DEBUFFPRECISION:mirror
        * 15 DEBUFFCONSTITUTION:caos
        */
        this.buttons = [];
        this.buttons.push(new Button(this, 50, 500, 'createrune', '', () => { referencia.hatk.push(1); }));
        this.buttons.push(new Button(this, 100, 500, 'userune', '', () => { referencia.hatk.push(2); }));
        this.buttons.push(new Button(this, 150, 500, 'energyrune', '', () => { referencia.hatk.push(3); }));
        this.buttons.push(new Button(this, 200, 500, 'liferune', '', () => { referencia.hatk.push(4); }));
        this.buttons.push(new Button(this, 250, 500, 'realityrune', '', () => { referencia.hatk.push(5); }));
        this.buttons.push(new Button(this, 300, 500, 'aceleraterune', '', () => { referencia.hatk.push(6); }));
        this.buttons.push(new Button(this, 350, 500, 'harmonyrune', '', () => { referencia.hatk.push(7); }));
        this.buttons.push(new Button(this, 400, 500, 'spacerune', '', () => { referencia.hatk.push(8); }));
        this.buttons.push(new Button(this, 450, 500, 'substancerune', '', () => { referencia.hatk.push(9); }));
        this.buttons.push(new Button(this, 500, 500, 'controlrune', '', () => { referencia.hatk.push(10); }));
        this.buttons.push(new Button(this, 550, 500, 'timerune', '', () => { referencia.hatk.push(11); }));
        this.buttons.push(new Button(this, 600, 500, 'limborune', '', () => { referencia.hatk.push(12); }));
        this.buttons.push(new Button(this, 650, 500, 'inanitionrune', '', () => { referencia.hatk.push(13); }));
        this.buttons.push(new Button(this, 700, 500, 'mirrorrune', '', () => { referencia.hatk.push(14); }));
        this.buttons.push(new Button(this, 750, 500, 'caosrune', '', () => { referencia.hatk.push(15); }));
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].setScale(1.5);
        }
        
        //monster status
        this.bosslife = this.add.text(455, 0, this.life, { fontSize: '15px', fill: '#fff' });
        //action signaling
        //action ->  1 : playeratk | 2 : monsteratk | 3 : monster damage animation | 4 : monster attack animation
        //turn ->  0 : end of turn | 1 : player turn | 2 : monster turn
        this.action = 0;
        this.turn = 0;
    }

    update() {
        this.lifebar.displayWidth = Math.max(0, this.lifebarw * this.life / this.maxlife);
        this.bosslife.setText(Math.floor(this.life));
        this.player.update();
        if (this.hatk.length == 5 && this.action == 0) {
            if (this.speed > this.player.speed) {
                this.action = 2;
                this.turn = 2;
            }
            else {
                this.action = 1;
                this.turn = 1;
            }
        }
        switch (this.action) {
            case 1:
                this.action = 2;
                if (this.turn == 2) {
                    this.action = 0;
                }
                this.playeratk();
                this.hatk.length = 0;
                break;
            case 2:
                this.action = 4;
                this.monsteratk();
                break;
            case 3:
                this.monsterdamageanimation();
                setTimeout(() => {
                    this.isUpdating = false;
                }, 1000); // Atraso de 1 segundo
                if (this.turn == 1) this.action = 2;
                else {
                    this.action = 0;
                    this.turn = 0;
                }
                break;
            case 4:
                this.monsteratkanimation();
                setTimeout(() => {
                    this.isUpdating = false;
                }, 1000); // Atraso de 1 segundo
                if (this.turn == 2) this.action = 1;
                else {
                    this.action = 0;
                    this.turn = 0;
                }
                break;
            default:
                break;
        }
    }
    playeratk() {
        for (let i = 0; i < this.hatk.length; i++) {
            switch (this.hatk[i]) {
                case 1:
                    this.player.item = [];
                    for (let j = 0; j < 5; j++) {
                        if (this.hatk[j] != 1 && this.hatk[j] != 2)
                            this.player.item.push(this.hatk[j]);
                    }
                    break;
                case 2:
                    if (this.player.item != null) {
                        let hatkaux = [];
                        hatkaux = hatkaux.concat(this.hatk);
                        let actionaux = this.action;
                        this.hatk = [];
                        this.hatk = this.hatk.concat(this.player.item);
                        this.playeratk();
                        this.hatk = [];
                        this.hatk = this.hatk.concat(hatkaux);
                        this.action = actionaux;
                        this.player.item = null;
                        this.player.item = [];
                    }
                    break;
                case 3:
                    if (this.player.precision > Math.random()) {
                        if (this.player.damage > this.resistence) {
                            let realdamage = this.player.damage - this.resistence;
                            realdamage += (this.player.damage - (this.player.damage * this.constitution));
                            this.life -= realdamage;
                        }
                        this.action = 3;
                    }
                    break;
                case 4:
                    this.player.cure++;
                    break;
                case 5:
                    this.player.damage++;
                    break;
                case 6:
                    this.player.speed++;
                    break;
                case 7:
                    this.player.resistence++;
                    break;

                case 8:
                    if (this.player.precision < 1)
                    this.player.precision += 0.1;
                    break;
                case 9:
                    if (this.player.constitution < 1)
                        this.player.constitution += 0.1;
                    break;
                case 10:
                    if (this.damage > 0)
                    this.damage--;
                    break;
                case 11:
                    if (this.cure > 0)
                        this.cure--;
                    break;
                case 12:
                    this.speed--;
                    break;

                case 13:
                    if (this.resistence > 0)
                    this.resistence--;
                    break;
                case 14:
                    if (this.precision > 0)
                        this.precision -= 0.1;
                    break;
                case 15:
                    if (this.constitution > 0)
                        this.constitution -= 0.1;
                    break;
                default:
                    break;
            }
        }
        this.life += this.cure;
        if (this.precision < 0) this.precision = 0;
        if (this.constitution < 0) this.constitution = 0;
        if (this.life > this.maxlife) this.life = this.maxlife;
    }
    monsteratk() {
        let monsatk = this.gerarhabilidaderandom(1, 13, 5);
        for (let i = 0; i < monsatk.length; i++) {
            switch (monsatk[i]) {
                case 1:
                    if (this.precision > Math.random()) {
                        if (this.damage > this.player.resistence) {
                            let realdamage = this.damage - this.player.resistence;
                            realdamage += (this.damage - (this.damage * this.player.constitution));
                            this.player.life -= realdamage;
                        }
                    }
                    break;
                case 2:
                    this.cure++;
                    break;
                case 3:
                    this.damage++;
                    break;
                case 4:
                    this.speed++;
                    break;
                case 5:
                    this.resistence++;
                    break;

                case 6:
                    if (this.precision < 1)
                        this.precision += 0.1;
                    break;
                case 7:
                    if (this.constitution < 1)
                        this.constitution += 0.1;
                    break;
                case 8:
                    if (this.player.damage > 0)
                        this.player.damage--;
                    break;
                case 9:
                    if (this.player.cure > 0)
                        this.player.cure--;
                    break;
                case 10:
                    this.player.speed--;
                    break;

                case 11:
                    if (this.player.resistence > 0)
                        this.player.resistence--;
                    break;
                case 12:
                    if (this.player.precision > 0)
                        this.player.precision -= 0.1;
                    break;
                case 13:
                    if (this.player.constitution > 0)
                        this.player.constitution -= 0.1;
                    break;
                default:
                    break;
            }
        }
        this.player.life += this.player.cure;
        if (this.player.precision < 0) this.player.precision = 0;
        if (this.player.constitution < 0) this.player.constitution = 0;
        if (this.player.life > this.player.maxlife) this.player.life = this.player.maxlife;
    }
    gerarhabilidaderandom(min, max, quantidade) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatorio);
        }
    return numeros;
    }
    monsterdamageanimation() {
        this.background.play('prigondamaged');
    }
    monsteratkanimation() {

    }
    
}