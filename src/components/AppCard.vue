<script>
import { store } from '../data/store';
import StarRating from 'vue-star-rating';

export default {
  name: 'AppCard',
  props:{
    card: Object,
  },
  components: {
  StarRating
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

    getRating(){
      return this.card.vote_average / 2;
    }

  },
};
</script>

<template>

  <div class="card col-3">
    <div class="informations">
      <div> {{ card.title || card.name }} </div>
      <div> ({{ card.original_title || card.original_name }}) </div>
      <div 
      :class="getFlag()"
      class="flag"></div>

    </div>
    
    <!-- <div> {{ card.original_language}} </div> -->
  
    <div class="rating-stars position-absolute bottom-0 start-0">
      <star-rating 
      :rating="getRating()"
      :star-size="20"
      :read-only="true"
      :increment="1"
      :active-color="['#E50815']"
      :show-rating="false"
      inactive-color="white"></star-rating>

    </div>
    <!-- <img :src="store.imageUrl + card.poster_path"> -->
    
  </div>

</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use "../styles/partials/mixins" as *;

.card{
  display: flex;
  background-color: white;
  height: 300px;
  margin:10px;
  padding: 20px 0;
  position: relative;
  color: black;
  .informations{
    text-align: center;
    .flag{
      margin: 20px 0;
    }
  }
  .rating-stars{
    margin: 10px;
  }
}

// .name{

// }

</style>