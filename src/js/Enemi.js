export default class Meteorite{

    #ctx

    constructor(ctx, hit){
        this.#ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.hit= hit;

    }

    #draw(x,y){
        // creation of the enemie
        this.#ctx.fillStyle = 'rgb(96, 96, 96)';
        this.#ctx.fillRect(x, y, 60, 60);
        
    }

    animate(){
        // mouvement of the enemie
        this.#draw(this.x, this.y);
        if(this.x < 4890)this.x += Math.floor(Math.random()*5); 
        if(this.y < 4120)this.y += Math.floor(Math.random()*5);
        
        else{
            this.#ctx.clearRect(this.x, this.y, 60, 60);
        }
    }

}