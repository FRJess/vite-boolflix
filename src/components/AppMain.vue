<script>
import { store } from '../data/store';

import AppCard from './AppCard.vue';
import AppLoading from './AppLoading.vue';
import AppJumbotron from './AppJumbotron.vue'

export default {
  name:'AppMain',
  components:{
    AppCard,
    AppLoading,
    AppJumbotron
  },
  data(){
    return{
      store,

    }
  },
}
</script>

<template>

  <AppJumbotron/>

  <main v-if="store.isLoadMovie && store.isLoadTV">
    <div class="jt-container py-5" v-if="store.movie.length > 0">

      <div class="row">
        <h2 class="ps-4 fs-1 py-2" v-if="!store.default">
          {{ store.movie.length }} movies found
        </h2>
        <AppCard
        v-for="card in store.movie" 
        :card="card"
        :key="card.id"
        :pathImg="card.poster_path"
        />
      </div>
    </div>

    <div class="jt-container py-2" v-if="store.tv.length > 0">
      <div class="row">
        <h2 class="ps-4 fs-1 py-2" v-if="!store.default">
          {{ store.tv.length }} tv shows found
        </h2>
        <AppCard
        v-for="card in store.tv" 
        :card="card"
        :key="card.id"
        :pathImg="card.poster_path"
        />
      </div>
    </div>

    <div
      class="container"
      v-if="store.movie.length === 0 && store.tv.length === 0"
    >
      <div class="row text-center py-5">
        <h2>no results</h2>
      </div>
    </div>

  </main>

    <!-- app loading presente ma non appare-->
    <AppLoading v-else/>

 
  
</template>

<style lang="scss" scoped>

@use "../styles/partials/mixins" as *;

.jt-container{
  width: 90%;
  margin: 0 auto;
  color: white;
  .row{
    @include centerFlex('horizontal');
    flex-wrap: wrap;
  }
}

</style>