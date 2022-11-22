<script>
import { store } from '../data/store';

export default {
  name: 'AppCard',
  props:{
    card: Object,
  },
  data(){
    return{
      store

    }
  },
}
</script>

<template>

  <div class="card col-3">
    
    <div> {{ card.title || card.name }} </div>
    <div> {{ card.original_title || card.original_name }} </div>
    <div> {{ card.language}} </div>
    <div> {{ card.vote_average}} </div>
    
  </div>
  
</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use "../styles/partials/mixins" as *;

.card{
  background-color: white;
  text-align: center;
  height: 300px;
  margin:10px;
  padding-bottom: 20px;
  position: relative;
  color: black;
}

// .name{

// }

</style>