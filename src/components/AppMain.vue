<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';
import ShowCard from './ShowCard.vue';

export default {
  name:'AppMain',
  components:{
    MovieCard,
    ShowCard,
  },
  data(){
    return{
      store,

    }
  },
}
</script>

<template>
  <div class="jt-container">
    <div class="row">
      <MovieCard
      v-for="movie in store.moviesList" 
      :key="movie.id"
      :movie="movie"
      :titolo="movie.title" 
      :titoloOriginal="movie.original_title"
      :lingua="movie.original_language"
      :voto="movie.vote_average"
      :pathImg="movie.poster_path"
      />

      <ShowCard
      v-for="tvShow in store.tvShowsList" 
      :key="tvShow.id"
      :show="tvShow"
      :titolo="tvShow.title" 
      :titoloOriginal="tvShow.original_title"
      :lingua="tvShow.original_language"
      :voto="tvShow.vote_average"
      :pathImg="tvShow.poster_path"
      />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.jt-container{
  color: white;
}

</style>