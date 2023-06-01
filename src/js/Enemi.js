export default class Meteorite{

    #ctx

    constructor(ctx){
        this.#ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.hit= 50;
        console.log(this.x);
    }

    #draw(x,y){
        
        this.#ctx.fillStyle = 'rgb(96, 96, 96)';
        this.#ctx.fillRect(x, y, 60, 60);
        
    }

    animate(){
        this.#draw(this.x, this.y);
        if(this.x < 4890)this.x += 5; 
        console.log(this.x);
        if(this.y < 4120)this.y += 3; 
        else{
            this.#ctx.clearRect(this.x, this.y, 60, 60);
        }
    }
}