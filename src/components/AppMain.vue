<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';

export default {
  name:'AppMain',
  data(){
    return{
      store
    }
  },

  components:{
    MovieCard,
  }

}
</script>

<template>
  <MovieCard/>
  <div class="jt-container">
    <ul>
      <li v-for="movie in store.moviesList" :key="movie.id">{{movie.original_title}}</li>
    </ul>
  </div>
  
</template>

<style lang="scss" scoped>

.jt-container{
  color: white;
}
li{
  // color: white;
  // background-color: red;
}

</style>