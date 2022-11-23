<script>
import { store } from '../data/store';
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default {
  name:'AppJumbotron',
  components: {
    Swiper,
    SwiperSlide,
  },
  props:{
    movie: Object,
  },

  data(){
    return{
      store,
      modules: [FreeMode, Pagination],
    }
  },
  
}
</script>

<template>

  <h2 class="text-center w-100">Popular Movies</h2>
  <div class="jumbotron my-4">

    <swiper class="swiper"
    :slidesPerView="3"
    :spaceBetween="10"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    >
  
      <swiper-slide v-for="movie in store.trending" 
      :key="movie.id">
      <img :src="store.imageUrl + movie.poster_path" alt="">
      </swiper-slide>
  
    </swiper>
    
  </div>
  
</template>

<style lang="scss" scoped>

h2{
  font-size: 4rem;
  color: white;
}

.jumbotron{
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;

  swiper-slide {
    display: inline-block;
    text-align: center;
    font-size: 18px;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
}


</style>