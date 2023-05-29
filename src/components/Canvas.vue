<template>
    <canvas ref="myGame" id="game">

    </canvas>
</template>

<script>
    import Game from "../js/GameScene"

    export default{

        mounted(){
    
            const canva = document.getElementById('game');
            this.context = canva.getContext('2d');
            canva.width = this.width;
            canva.height = this.height;
            const game = new Game(this.context, this.width, this.height);
            game.gameLoop.apply(game);
            // this.drawGame();
        },
        data(){
                return{
                    characterPosition: {
                        x: 1900,
                        y: 510,
                    },
                    context: null,
                    height: 1410,
                    width: 2875,
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
                        cancelAnimationFrame(this.animateEnemi);
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