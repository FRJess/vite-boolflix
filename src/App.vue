<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  
  components:{
    AppHeader,
    AppMain,
  },

  methods:{
    getMovies(){
      axios.get(store.apiUrlMovies, {
        params:{
          api_key: store.apiKey,
          query: store.movieShowSearch,
        }
      })
      .then( result => {
        store.moviesShowsList = result.data.results
        // console.log(store.moviesShowsList)
      })
      .catch(error => {
        console.log(error)
      })
    },
    // startSearch(){
    //   this.getMovies();
    // }
  },
  mounted(){
    this.getMovies();
  },

}

</script>

<template>

  <AppHeader @search="getMovies()"/>

  <main>
    <AppMain/>
  </main>
</template>


<style lang="scss">

@use './styles/general';
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins' as *;

</style>