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
      axios.get(store.apiUrl)
      .then( result => {
        store.moviesList = result.data.results
        console.log(store.moviesList)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted(){
    this.getMovies();
  },

}

</script>

<template>

  <AppHeader/>
  <AppMain/>
  
</template>


<style lang="scss">

@use './styles/general';
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins' as *;

</style>