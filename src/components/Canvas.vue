<template>
<!-- <h2>Press P</h2> -->
    <canvas ref="myGame" id="game" moz-opaque>
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
                    context: null,
                    height: 1075,
                    width: 2850,
                }
               
            },
    }
</script>
<style>

</style>