import Character from '../js/Character'
import Meteroite from './Enemi';

const KEY_CODE =  {
    PLAY: 80,
}

export default class GameScene {
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height) {
      this.#ctx = ctx;
      this.#width = width;
      this.#height = height;
      this.x = 0;
      this.y = 0;
      this.character = new Character(ctx);
      this.meteroite = new Meteroite(ctx, width);
      this.play_game = 0
      window.addEventListener('keydown', this.play.bind(this));
    }

    #collision(){
        if(this.character.x <= this.meteroite.x && this.character.x + 500 >= this.meteroite.x 
        && this.character.y <= this.meteroite.y && this.character.y + 500 >= this.meteroite.y){
            console.log('colision');
            this.character.heal -= this.meteroite.hit
            this.meteroite.x = 2890;
            this.meteroite.y = 1120
        }
    }


    #draw(){
        
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.character.animate();
        this.meteroite.animate();
        this.#collision();
    }

    gameLoop(){
        this.#draw();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    play(event){
        if(!event)return
        switch (event.keyCode) { 
            case KEY_CODE.PLAY:
               this.play = 1;
               break;
            case this.character.heal === 0:
                this.play = 0;
                break;
            default:
                break;
        }
    }
}

