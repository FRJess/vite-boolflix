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

  <div class="jt-container py-5">

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
    </div>
  </div>
  
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