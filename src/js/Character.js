const KEY_CODE =  {
   // defined the key 
            LEFT: 81, //q 
            UP: 90, //z
            RIGHT: 68, // d
            DOWN: 83, //s
        }

export default class Character{

    #ctx

    constructor(ctx){
        this.#ctx = ctx;
        this.x = 1900;
        this.y = 510;
        this.heal = 500;
        this.maxheal = 500;
        this.animateCallBack = this.animate.bind(this);
        window.addEventListener('keydown', this.animateCallBack);
    }

    #draw(x,y){

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
        this.#ctx.fillRect(x, y-25, this.maxheal, 15);

        this.#ctx.fillStyle = 'rgb(124, 255, 0)';
        this.#ctx.fillRect(x, y-25, this.heal, 15);
        }

    animate(event){
      //  mouvement with a keybord 
        this.#draw(this.x, this.y);
        if(!event)return;
        switch (event.keyCode) { 
            case KEY_CODE.LEFT:
               if(this.x > 0)this.x -= 50
               break;
            case KEY_CODE.RIGHT:
               if(this.x < 2350)this.x += 50;
               break;
            case KEY_CODE.DOWN:
               if(this.y < 825) this.y += 50;
               break;
            case KEY_CODE.UP:
               if(this.y > 0)this.y -= 50;
               break;
            default:
               break;
         }
   }

   removeListener(){
      window.removeEventListener('keydown', this.animateCallBack);
   }
}