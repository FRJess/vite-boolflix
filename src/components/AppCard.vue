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
      store,
      summary: '',
      releaseYear: '',

    }
  },

  created() {
      let releaseDate = new Date(this.card.release_date);
      this.releaseYear = releaseDate.getFullYear();
    },

  methods:{
    getSummary(){
      store.isOverviewClicked = true;
    },

    getCard(){
      store.isOverviewClicked = false;
    },

    resetCard(){
      store.isOverviewClicked = false;
    },

    getFlag(){
      if (this.card.original_language === 'en'){
        return "fi fi-gb";
      }else if (this.card.original_language === 'it'){
        return "fi fi-it";
      }else if (this.card.original_language === 'de'){
        return "fi fi-de";
      }else if (this.card.original_language === 'fr'){
        return "fi fi-fr";
      }else if (this.card.original_language === 'ja'){
        return "fi fi-jp";
      }else if (this.card.original_language === 'hu'){
        return "fi fi-hu";
      }else {
        return "fi fi-gb";}
    },

    getRating(){
      return this.card.vote_average / 2;
    },
  },
};
</script>

<template>

  <div class="card jt-card col-2 text-center" @mouseleave="resetCard()">

    <div class="cover">
      <img v-if="this.card.poster_path == null" src="../assets/img/no_poster.jpg" alt="no poster available">
      <img v-else :src="store.imageUrl + card.poster_path" :alt="this.card.title || this.card.name">
      <h3 class="title">{{card.title || card.name}}</h3>
      <h3 class="title">{{ releaseYear }}</h3>
    </div>

    <div class="card-info">
      <div class="summary"  v-if="store.isOverviewClicked" @click="getCard()">
      {{this.card.overview.substring(0,180)+"..."}}
      </div>

      <div v-else>
        <div @click="getSummary()">Show summary</div>
        
        <!-- <div 
        :class="getFlag()"
        class="flag rounded-2"></div> -->
  
        <div class="rating-stars">
          <star-rating 
          :rating="getRating()"
          :star-size="30"
          :read-only="true"
          :increment="1"
          :active-color="['#FF0005']"
          :show-rating="false"
          :round-start-rating= "true"
          inactive-color="white"
          :glow="4"
          glow-color="#ffff00">
          </star-rating>
        </div>

      </div>
    </div>

    <div class="background"></div>
  </div>

</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use "../styles/partials/mixins" as *;


.background {
  background-color: $secondary-color;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -15%;
  top: 5%;
  transform: scale(0.5, 1.2);
  opacity: 0;
  border-radius: 0.5em;
  z-index: 20;
}

.jt-card {
  background-color: $primary-color;
  margin: 50px 20px;
  padding: 10px 5px ;
  height: 300px;
  min-width: 200px;
  max-width: 250px;
  position: relative;
  

  &:hover {
    .cover {
      position: relative;
      right: 0;
      left: 0;
      transform: translateY(-20%) scale(1.0);
      z-index: 40;
      margin-bottom: 5px;
      img{
        transform: scale(1.2);
        margin-bottom: 10px;
      }
    }

    .card-info {
      opacity: 1;
      transition: transform 250ms ease, opacity 150ms linear;
      transform: translateY(-40%);
      z-index: 21;
    }

    .background {
      transform: scale(1.2);
      opacity: 1;
    }
  }
}

.cover {
  transition: 250ms;

  img {
    height: 200px;
    max-width: 100%;
    border-radius: 0.5em;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title {
    margin-top: 10px;
    font-size: 1.2rem;
  }
}

.card-info {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  

  .summary{
    font-family: $secondary-font;
    font-size: 0.8rem;
    text-align: justify;
  }
  .flag{
    width: 30px;
    padding: 10px 0;
  }

  .rating-stars{
    padding: 10px 0;
    margin-bottom: 20px;
  }
}

</style>