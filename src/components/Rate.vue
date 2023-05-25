<template>
    <div class="wrap">
      <div :key = index v-for="(movie, index) in movies" class="style">
        <div @click="goToMovie(movie.id)">
          <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="" class="img_home">
          <h2 class="h2_home">{{ movie.original_title }}</h2>
        </div>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  
  export default{
  
    data(){
      return{
        movies: null,
      }
    },
    mounted(){
      axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=85f25a9951a9b561a28bb8b4903b3260')
      .then((response) => 
      {
        this.movies = response.data.results
      });
      
    },
    methods:{
      goToMovie(movieid){
        this.$router.push({ name: 'about', params: { movieid }});
      }
    }
  };
</script>
