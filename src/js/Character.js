const KEY_CODE =  {
            LEFT: 81,
            UP: 90,
            RIGHT: 68,
            DOWN: 83,
        }

export default class Character{
    #ctx

    constructor(ctx){
        this.#ctx = ctx;
        this.x = 1900;
        this.y = 510;
        this.heal = 500;
        this.maxheal = 500;
        this.play = 0;
        window.addEventListener('keydown', this.animate.bind(this));
    }

    #draw(x,y){
        // this.#ctx.clearRect(0, 0, this.#width, this.#height);
        if (typeof x !== "number" && typeof y !== "number" )
        throw new Error("il manque deffinition de x et y");
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

        // barre de vie 
        
        this.#ctx.fillStyle = 'rgb(255, 0, 0)';
        this.#ctx.fillRect(x, y-25, 500, 15);

        this.#ctx.fillStyle = 'rgb(124, 255, 0)';
        this.#ctx.fillRect(x, y-25, this.heal, 15);
        }

    animate(event){
        this.#draw(this.x, this.y);
        if(!event)return
        switch (event.keyCode) { 
            case KEY_CODE.LEFT:
               if(this.x > 0)this.x -= 10
               break;
            case KEY_CODE.RIGHT:
               if(this.x < 2350)this.x += 10;
               break;
            case KEY_CODE.DOWN:
               if(this.y < 500) this.y += 10;
               break;
            case KEY_CODE.UP:
               if(this.y > 0)this.y -= 10;
               break;
            default:
               break;
            }
   }
}