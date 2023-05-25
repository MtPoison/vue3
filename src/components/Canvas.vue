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
            // this.game = new GameScene(context, canva.width, canva.height);
            this.drawCharacter(this.characterPosition.x, this.characterPosition.y);
            window.addEventListener('keydown', this.animate);

        },
        data(){
                return{
                    characterPosition: {
                        x: 0,
                        y: 0,
                    },
                    context: null,
                    height: 5000,
                    width: 5000,
                    game: null,


                    KEY_CODE: {
                        LEFT: 81,
                        UP: 90,
                        RIGHT: 68,
                        DOWN: 83,
                    },
                    
                }
               
            },

        methods: {

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
        },      

        animate(event) {
            this.context.clearRect(0, 0, this.width, this.height);
            // this.characterPosition.x += 10;
            // this.characterPosition.y += 0.00;
            this.drawCharacter(this.characterPosition.x, this.characterPosition.y);
            console.log('animate');
            switch (event.keyCode) {
                case this.characterPosition.x === 2350 || this.characterPosition.y === 2300 || this.characterPosition.x === -1 || this.characterPosition.y === -1:
                //    cancelAnimationFrame(this.animate.bind(this));
                   break;   
                case this.KEY_CODE.LEFT:
                   console.log('Left');
                   this.characterPosition.x -= 10;
                   break;
                case this.KEY_CODE.RIGHT:
                   console.log('Right');
                   this.characterPosition.x += 10;
                   break;
                case this.KEY_CODE.DOWN:
                   console.log('Down');
                   this.characterPosition.y += 10;
                   break;
                case this.KEY_CODE.UP:
                   console.log('Up');
                   this.characterPosition.y -= 10;
                   break;
                default:
                    requestAnimationFrame(this.animate.bind(this));
                   break;
            }            
            // if(this.characterPosition.x === 2350 || this.characterPosition.y === 2300){
            //     cancelAnimationFrame(this.animate.bind(this));
            // }else{
                
            // }
            
        }
           
        },
        
    }
</script>
<style>

   /* #game{
    border: 5px;
    background-color: white;
   } */
</style>