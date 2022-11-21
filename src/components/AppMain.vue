<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';

export default {
  name:'AppMain',
  components:{
    MovieCard,
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
      v-for="movie in store.moviesShowsList" 
      :key="movie.id"
      :movie="movie"
      />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.jt-container{
  color: white;
}

</style>