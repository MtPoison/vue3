import Character from './Character'
import Meteorite from './Enemi';

const KEY_CODE =  {
  PLAY: 80,
}

export default class GameScene {
    #ctx;
    #width;
    #height;


    constructor(ctx, width, height) {
        // initialize the parameter
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.startGame();
      }
    
    startGame(){
      this.x = 0;
      this.y = 0;
      this.interval = 1000;
      this.dommage = 50;
      this.score = 0;
      this.game_over = false;
      this.rafId = null; 
      this.meteorites = [];
      this.character = new Character(this.#ctx);
      this.createMeteorites();
      this.replayCallBack = this.rePlayGame.bind(this);
      this.checkDifficulty();
      console.log(this.rePlay, this.game_over)
    }
    
    lvl(){
      this.interval -= 50;
      this.dommage += 25;
      clearInterval(this.intervalID);
      this.createMeteorites();
    }

    createMeteorites() {
        // creation of lot of enemies
        this.intervalID = setInterval(() => {
            const randomX = Math.random() * (this.#width - 60); 
            const meteorite = new Meteorite(this.#ctx, this.dommage);
            meteorite.x = randomX;
            this.meteorites.push(meteorite);
            this.score += 50;
          }, this.interval); 
        }
      
    #collision() {
        // detection of the collision for the charactere with each one enemie
        for (let i = 0; i < this.meteorites.length; i++) {
          const meteorite = this.meteorites[i];
          if (
            this.character.x <= meteorite.x + 60 &&
            this.character.x + 500 >= meteorite.x + 60 &&
            this.character.y <= meteorite.y + 60 &&
            this.character.y + 500 >= meteorite.y + 60
          ) {
            // the result of the collision
            this.character.heal -= meteorite.hit;
            meteorite.x = 2890;
            meteorite.y = 1120;
            if(this.character.heal <= 0) this.game_over = true;
            
          }
        }
      }

      checkDifficulty(){
        setInterval(() =>{
          this.lvl();
        }, 5000);
      }


      scoreGame(){
        this.#ctx.fillStyle = 'white';
        this.#ctx.font = '50px Arial';
        this.#ctx.textAlign = 'center';
        this.#ctx.fillText(`Score : ${this.score}` , 50, 50);
      }

    gameOver(){
        // if life of the character = 0 the game stop
        if(this.game_over){
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.#ctx.fillStyle = 'white';
            this.#ctx.font = '100px Arial';
            this.#ctx.textAlign = 'center';
            this.#ctx.fillText('Game Over press P to restart', this.#width / 2, this.#height / 2);
            this.rePlay = false;
            window.addEventListener('keydown',this.replayCallBack); 
            this.character.removeListener();
            return;
        }
      }
      

      rePlayGame(event){
        if(!event)return
        switch (event.keyCode) { 
            case KEY_CODE.PLAY:
              window.removeEventListener('keydown',this.replayCallBack);
              this.startGame();
              this.gameLoop();
               break;

            default:
              break;
        }
      }

    #draw() {
        // draw the game
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        // console.log("replay draw : ",this.rePlay);
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
        this.scoreGame();
        this.gameOver();

      }

    gameLoop(){
        // loop the game 
        this.#draw();
        if(this.game_over) {
          cancelAnimationFrame(this.rafId);
          return;
        };
      this.rafId = requestAnimationFrame(this.gameLoop.bind(this));
      
        
    }
}

