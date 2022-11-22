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
  props:{
    title: String,
    type: String,
  },
  data(){
    return{
      store,

    }
  },
}
</script>

<template>
  <h1 class="jt-container">
    {{title}}
  </h1>

  <div class="jt-container">

    <div class="row">
      <MovieCard
      :card="card"
      v-for="card in store[type]" 
      :key="card.id"
      :movie="card"
      :titolo="card.title" 
      :titoloOriginal="card.original_title"
      :lingua="card.original_language"
      :voto="card.vote_average"
      :pathImg="card.poster_path"
      />

      <ShowCard
      v-for="tvShow in store.tvShowsList" 
      :key="tvShow.id"
      :show="tvShow"
      :titolo="tvShow.name" 
      :titoloOriginal="tvShow.name"
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