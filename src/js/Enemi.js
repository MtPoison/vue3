export default class Meteroite{
    #ctx
    #width;
    #height;

    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y =0;
        this.hit= 50;
    }

    #draw(x,y){
        for(let i = 0; i < 5; i++){
            let ale = Math.random()*10
            console.log(i, x)
            this.#ctx.fillStyle = 'rgb(96, 96, 96)';
            this.#ctx.fillRect(x + ale, y, 60, 60);
        }
    }

    animate(){

        let ale = Math.random()*10
        this.#draw(this.x, this.y);
        if(this.x < 2890)this.x += 5;
        if(this.y < 1120)this.y += 3; 

        else{
            this.#ctx.clearRect(this.x + ale, this.y, 60, 60);
        }
        
    }
}