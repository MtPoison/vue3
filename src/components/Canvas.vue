<template>
    <canvas ref="myGame" id="game">

    </canvas>
</template>

<script>

    export default{

        mounted(){
    
            const canva = document.getElementById('game');
            this.context = canva.getContext('2d');
            canva.width = this.width;
            canva.height = this.height;
            this.drawGame();
        },
        data(){
                return{
                    characterPosition: {
                        x: 1900,
                        y: 510,
                    },
                    context: null,
                    height: 600,
                    width: window.innerWidth,
                    game: window.innerHeight,

                    
                    KEY_CODE: {
                        LEFT: 81,
                        UP: 90,
                        RIGHT: 68,
                        DOWN: 83,
                        SHOOT: 69,
                    },

                    enemisPosition: {
                        x: 1000,
                        y: 0,
                    },

                    projectilChracter: {
                        x: 0,
                        y: 0,
                    },

                    vieChracter: {
                        vieChracter: 500,
                        vieMaxCharacter: 500,
                    },
                    degatMeteorite : 50
                    
                }
               
            },

        methods: {

            collision(){
                    if(this.characterPosition.x <= this.enemisPosition.x && this.characterPosition.y <= this.enemisPosition.y ){
                        console.log('ok collision !!!');
                        this.vieChracter -= this.degatMeteorite;
                        console.log(this.vieChracter);
                        
                        cancelAnimationFrame(this.animateEnemi)
                    }
                    
                    
            },

            drawGame(){
                this.context.clearRect(0, 0, this.width, this.height);
                this.collision();
                this.drawCharacter(this.characterPosition.x, this.characterPosition.y);
                window.addEventListener('keydown', this.animateCharacter);
                window.addEventListener('keyup', this.animateCharacterProjectil);
                this.animateEnemi();
                requestAnimationFrame(this.drawGame.bind(this));
                
            },

            drawCharacter(x, y) {
                if (typeof x !== "number" && typeof y !== "number" )
                    throw new Error("il manque deffinition de x et y");
                // body
                this.context.fillStyle = 'rgb(0, 0, 0)';
                this.context.fillRect(x, y, 500, 500);
                // foot
                this.context.fillStyle = 'rgb(255, 165, 0)';
                this.context.fillRect(400+x, 500+y, 75, 75);
                this.context.fillRect(25+x, 500+y, 75, 75);
                // left eye
                this.context.beginPath();
                this.context.fillStyle='rgb(96, 96, 96)';
                this.context.arc(125+x, 100+y, 70, 0, 2 * Math.PI);
                this.context.fill();
                this.context.beginPath();
                this.context.fillStyle= 'rgb(255, 255, 255)';
                this.context.arc(125+x, 100+y, 60, 0, 2 * Math.PI);
                this.context.fill();
                this.context.beginPath();
                this.context.fillStyle= 'rgb(0, 0, 0)';
                this.context.arc(125+x, 100+y, 20, 0, 2 * Math.PI);
                this.context.fill();
                // right eye
                this.context.fillStyle='rgb(96, 96, 96)';
                this.context.arc(375+x, 100+y, 70, 0, 2 * Math.PI);
                this.context.fill();
                this.context.beginPath();
                this.context.fillStyle= 'rgb(255, 255, 255)';
                this.context.arc(375+x, 100+y, 60, 0, 2 * Math.PI);
                this.context.fill();
                this.context.beginPath();
                this.context.fillStyle= 'rgb(0, 0, 0)';
                this.context.arc(375+x, 100+y, 20, 0, 2 * Math.PI);
                this.context.fill();

                // barre de vie 
                
                this.context.fillStyle = 'rgb(255, 0, 0)';
                this.context.fillRect(x, y-25, 500, 15);

                this.context.fillStyle = 'rgb(124, 255, 0)';
                this.context.fillRect(x, y-25, 500, 15);
        },      

        animateCharacter(event) {
           
            this.drawCharacter(this.characterPosition.x, this.characterPosition.y);
            switch (event.keyCode) {
                case this.characterPosition.x === 2350 || this.characterPosition.y === 2300 || this.characterPosition.x === -1 || this.characterPosition.y === -1:        
                   break;   
                case this.KEY_CODE.LEFT:
                   this.characterPosition.x -= 10
                   break;
                case this.KEY_CODE.RIGHT:
                   this.characterPosition.x += 10;

                   break;
                case this.KEY_CODE.DOWN:
                   this.characterPosition.y += 10;
  
                   break;
                case this.KEY_CODE.UP:
                   this.characterPosition.y -= 10;

                   break;
                default:
                   break;
                }
            },
            
            drawCharacterProjectil(x,y){

                x = 10-this.characterPosition.x;
                y = this.characterPosition.y;
                this.context.fillStyle = 'rgb(96, 96, 96)';
                this.context.fillRect(x, y, 60, 30);

            },

            animateCharacterProjectil(event){
                this.drawCharacterProjectil(this.projectilChracter.x, this.projectilChracter.y);
                switch (event.keyCode) {
                    case this.KEY_CODE.SHOOT:
                        this.projectilChracter.x -= 15;
                        this.drawCharacterProjectil.y =0;
                }
            },

            drawEnemie(x,y){
                this.context.fillStyle = 'rgb(96, 96, 96)';
                this.context.fillRect(x, y, 30, 30);
            },

            animateEnemi(){
                this.drawEnemie(this.enemisPosition.x, this.enemisPosition.y);
                this.enemisPosition.x += 5;
                this.enemisPosition.y += 3; 
  

            },
           
        },
        
    }
</script>
<style>

   /* #game{
    border: 5px;
    background-color: white;
   } */
</style>