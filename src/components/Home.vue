<template>

  <div class="wrap">

    <div :key=index v-for="(movie, index) in movies" class="style">
      <div @click="goToMovie(movie.id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="" class="img_home"/>
        <h2 class="h2_home">{{ movie.original_title }}</h2>
      </div>
    </div>
  </div>

</template>
  
<script>
import axios from 'axios';


export default {

  data() {
    return {
      movies: null, 
    }
  },
  mounted() {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=85f25a9951a9b561a28bb8b4903b3260')
      .then((response) => {
        this.movies = response.data.results
      });

  },
  methods: {
    goToMovie(movieid) {
      this.$router.push({ name: 'about', params: { movieid } });
    }
  },


};


</script>
  
<style>
body {
  background-image: url("../src/assets/Illustration_espace.png");
  background-size: cover;
}

.img_home {
  width: 55%;
  margin: auto;
  border-radius: 50px;
  transition-duration: 2s;
  display: flex;
  justify-content: center;
}

.img_home:hover {
  width: 45%;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.style {
  width: 600px;
  margin-left: 10%;
  margin-top: 5%;

}

.titre {
  text-align: center;
}


h1 {
  text-align: center;
  color: aliceblue;
  font-size: 200px;
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none; 
}

.h2_home {
  text-align: center;
  color: rgb(16, 83, 138);
  font-size: 50px;
  margin-bottom: 40%;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}


</style>