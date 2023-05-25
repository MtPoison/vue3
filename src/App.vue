
<template>
  <div>
    <RouterLink class="home_link" to="/"><h1 >Space stream</h1></RouterLink>
   
  </div>
  <div class="categorie">
    <RouterLink class="categorie-link" to="/rate">The most rated</RouterLink>
    <p class="categorie-link" >|</p>
    <RouterLink class="categorie-link" to="/popular">The most popular</RouterLink>
    <p class="categorie-link" >|</p>
    <RouterLink class="categorie-link" to="/canvas">canvas</RouterLink>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            movies: null,
        };
    },
    mounted() {
        axios
            .get("https://api.themoviedb.org/3/movie/upcoming?api_key=85f25a9951a9b561a28bb8b4903b3260")
            .then((response) => {
            this.movies = response.data.results;
            console.log(this.movies);
        });
    },
}
</script>

<style>

.categorie {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

}

.categorie-link {
  text-decoration: none;
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
  color: rgb(16, 83, 138);
  justify-content: space-around;
}

.home_link{
    text-decoration: none;
}


h1 {
  text-align: center;
  color: aliceblue;
  font-size: 200px;
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none; 
}
</style>
