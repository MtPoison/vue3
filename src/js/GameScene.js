import Character from '../js/Character'

export default class GameScene {
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height) {
      this.#ctx = ctx;
      this.#width = width;
      this.#height = height;
      console.log('Game loaded');
      this.x = 0;
      this.y = 0;
      this.character = new Character(ctx, width, height);
    }

    #drawCharacter(x, y) {
       // body
        this.#ctx.fillStyle = 'rgb(0, 0, 0)';
        this.#ctx.fillRect(x, y, 500, 500);
        // foot
        this.#ctx.fillStyle = 'rgb(255, 165, 0)';
        this.#ctx.fillRect(400+x, 500+y, 75, 75);
        this.#ctx.fillRect(25+x, 500+y, 75, 75);
        // left eye
        this.#ctx.beginPath();
        this.#ctx.fillStyle='rgb(96, 96, 96)';
        this.#ctx.arc(125+x, 100+y, 70, 0, 2 * Math.PI);
        this.#ctx.fill();
        this.#ctx.beginPath();
        this.#ctx.fillStyle= 'rgb(255, 255, 255)';
        this.#ctx.arc(125+x, 100+y, 60, 0, 2 * Math.PI);
        this.#ctx.fill();
        this.#ctx.beginPath();
        this.#ctx.fillStyle= 'rgb(0, 0, 0)';
        this.#ctx.arc(125+x, 100+y, 20, 0, 2 * Math.PI);
        this.#ctx.fill();
        // right eye
        this.#ctx.fillStyle='rgb(96, 96, 96)';
        this.#ctx.arc(375+x, 100+y, 70, 0, 2 * Math.PI);
        this.#ctx.fill();
        this.#ctx.beginPath();
        this.#ctx.fillStyle= 'rgb(255, 255, 255)';
        this.#ctx.arc(375+x, 100+y, 60, 0, 2 * Math.PI);
        this.#ctx.fill();
        this.#ctx.beginPath();
        this.#ctx.fillStyle= 'rgb(0, 0, 0)';
        this.#ctx.arc(375+x, 100+y, 20, 0, 2 * Math.PI);
        this.#ctx.fill();
    }

    animate() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.x += 0;
        this.y += 0.00;
        this.#drawCharacter(this.x, this.y);
        console.log('animate');
        requestAnimationFrame(this.animate.bind(this));
    }

    #draw(){
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        // this.collision();
        // this.drawCharacter(this.characterPosition.x, this.characterPosition.y);
        // window.addEventListener('keydown', this.animateCharacter);
        // window.addEventListener('keyup', this.animateCharacterProjectil);
        // this.animateEnemi();
        this.character.animate();
        console.log("drawing the game");
        
    }

    gameLoop(){
        this.#draw();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

