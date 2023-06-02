import Character from '../js/Character'
import Meteorite from './Enemi';

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
        this.meteorites = [];
        this.createMeteorites();
        this.game_over = false;
        
      }
    
    createMeteorites() {
        setInterval(() => {
            const randomX = Math.random() * (this.#width - 60); 
            const meteorite = new Meteorite(this.#ctx);
            meteorite.x = randomX;
            this.meteorites.push(meteorite);
          }, 1000); 
        }
      
    #collision() {
        for (let i = 0; i < this.meteorites.length; i++) {
          const meteorite = this.meteorites[i];
          if (
            this.character.x <= meteorite.x + 60 &&
            this.character.x + 500 >= meteorite.x + 60 &&
            this.character.y <= meteorite.y + 60 &&
            this.character.y + 500 >= meteorite.y + 60
          ) {
            this.character.heal -= meteorite.hit;
            meteorite.x = 2890;
            meteorite.y = 1120;
            if(this.character.heal === 0) this.game_over = true;
            
          }
        }
      }

    gameOver(){
        if(this.game_over){
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.#ctx.fillStyle = 'white';
            this.#ctx.font = '100px Arial';
            this.#ctx.textAlign = 'center';
            this.#ctx.fillText('Game Over', this.#width / 2, this.#height / 2);
            return;
        }
      }
    


    #draw() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.character.animate();
        for (let i = 0; i < this.meteorites.length; i++) {
          const meteorite = this.meteorites[i];
          meteorite.animate();
          if (meteorite.x > this.#width || meteorite.y > this.#height) {
            this.meteorites.splice(i, 1);
            i--;
          } 
        }
        this.#collision();
        this.gameOver();
     
      }

    gameLoop(){
        this.#draw();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

