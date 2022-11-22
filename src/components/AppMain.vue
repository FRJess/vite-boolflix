<script>
import { store } from '../data/store';

import AppCard from './AppCard.vue';

export default {
  name:'AppMain',
  components:{
    AppCard,
  },
  data(){
    return{
      store,

    }
  },
}
</script>

<template>
  <!-- <h1 class="jt-container">
    {{title}}
  </h1> -->

  <div class="jt-container">

    <div class="row">
      <AppCard
      v-for="card in store.movie" 
      :card="card"
      :key="card.id"
      :pathImg="card.poster_path"
      />

      <AppCard
      v-for="card in store.tv" 
      :card="card"
      :key="card.id"
      :pathImg="card.poster_path"
      />


      <!-- :titolo="card.title" 
      :titoloOriginal="card.original_title"
      :lingua="card.original_language"
      :voto="card.vote_average"
      :pathImg="card.poster_path" -->
      <!-- 
      <ShowCard
      v-for="tvShow in store.tvShowsList" 
      :key="tvShow.id"
      :show="tvShow"
      :titolo="tvShow.name" 
      :titoloOriginal="tvShow.name"
      :lingua="tvShow.original_language"
      :voto="tvShow.vote_average"
      :pathImg="tvShow.poster_path"
      /> -->
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.jt-container{
  color: white;
}

</style>