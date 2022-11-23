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
        return "fi fi-xx";}
    },

    getRating(){
      return this.card.vote_average / 2;
    },
  },
};
</script>

<template>

  <div class="card jt-card col-2 text-center">
    <!-- <div class="rank">{{rank}}</div> -->

    <div class="cover">
      <img :src="store.imageUrl + card.poster_path">
      <h3 class="title">{{card.title || card.name}}</h3>
    </div>

    <div class="card-info">
      <div class="summary px-2">{{card.overview.substring(0,150)+"..."}}</div>

      <div 
      :class="getFlag()"
      class="flag"></div>

      <div class="rating-stars">
        <star-rating 
        :rating="getRating()"
        :star-size="30"
        :read-only="true"
        :increment="1"
        :active-color="['#A7121D']"
        :show-rating="false"
        inactive-color="white"></star-rating>
  
      </div>
    </div>

    <div class="background"></div>
  </div>

</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use "../styles/partials/mixins" as *;


.background {
  background-color: lighten($secondary-color, 40%);
  position: absolute;
  right: 0;
  left: 0;
  bottom: -2em;
  top: 5%;
  padding: 5em;
  transform: scale(0.5, 1.2);
  opacity: 0;
  border-radius: 0.5em;
  z-index: 20;
}

.jt-card {
  background-color: #A7121D;
  margin: 50px 20px;
  padding: 20px 0 10px 0 ;
  min-height: 380px;
  position: relative;
  cursor: pointer;
  

  &:hover {
    .cover {
      position: relative;
      right: 0;
      left: 0;
      transform: scale(1.1);
      z-index: 40;
      img{
        transform: translateY(-50%) scale(1.3);
      }
    }

    .card-info {
      opacity: 1;
      transition: transform 250ms ease, opacity 150ms linear;
      transform: translate(0);
      z-index: 21;
    }

    .background {
      transform: scale(1.4);
      opacity: 1;
    }
  }
}

.cover {
  transition: 250ms;

  img {
    height: 150px;
    max-width: 100%;
    border-radius: 0.5em;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title {
    margin: 10px 0;
  }
}

.card-info {
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  

  .summary{
    font-family: $secondary-font;
    font-size: 0.8rem;
    text-align: justify;
  }
  .flag{
    width: 40px;
    padding: 20px 0;
  }

  .rating-stars{
    // width: 40px;
    padding: 20px 0;
  }
}

</style>