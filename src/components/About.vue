<template>
  <div>

    <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="" class="img_about">
    <h2 className="h2_about">Nom : {{ movie.title }}</h2>
    <h2 className="h2_about">Date de sortie : {{ movie.release_date }}</h2>

    <h2 className="h2_about">Synopsis : </h2>
    <br />
    <p class="info">{{ movie.overview }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movieid: this.$route.params.movieid,
      movie: {}
    }
  },
  mounted() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.movieid}?api_key=85f25a9951a9b561a28bb8b4903b3260`)
      .then((response) => {
        this.movie = response.data
      });

  },
}
</script>

<style>
.img_about {
  display: flex;
  width: 60%;
  height: auto;
  border-radius: 1%;
  margin-left: 20%;
}

.h2_about,
.info {
  font-size: 50px;
  color: rgb(16, 83, 138);
}

.h2_about {
  text-align: center;
}

.info {
  text-align: justify;
  margin-left: 5%;
  margin-right: 5%;
}
</style>