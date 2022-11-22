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
  methods:{
    getFlag(){
      if (this.card.original_language === 'en') return "fi fi-gb";
      else if (this.card.original_language === 'it') return "fi fi-it";
      else if (this.card.original_language === 'de') return "fi fi-de";
      else if (this.card.original_language === 'fr') return "fi fi-fr";
      else if (this.card.original_language === 'ja') return "fi fi-jp";
      else if (this.card.original_language === 'hu') return "fi fi-hu";
      else return "fi fi-xx";
    },

  },
};
</script>

<template>

  <div class="card col-3">
    
    <div 
    :class="getFlag()"
    class="flag"></div>
    <div> {{ card.title || card.name }} </div>
    <div> ({{ card.original_title || card.original_name }}) </div>
    <!-- <div> {{ card.original_language}} </div> -->
    <div> {{ card.vote_average}} </div>
    <!-- <img :src="store.imageUrl + card.poster_path"> -->
    
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
  .flag{
    margin: 10px
  }
}

// .name{

// }

</style>