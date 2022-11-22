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

    getApi(type){
      axios.get(store.apiUrl + type, { params: store.apiParams })
      .then( result => {
        store[type] = [];
        store[type] = result.data.results;
        console.log(result.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    },

    startSearch(){
      store.moviesList = [];
      store.tvShowsList = [];
      if(store.type === ''){
        this.getApi('movie');
        this.getApi('tv');
      }else{
        this.getApi(store.type)
      }
    }
  },

  mounted(){
    this.startSearch();
  },
}

</script>

<template>

  <AppHeader @search="startSearch()"/>

  <main>
    <AppMain/>
  </main>
  
</template>


<style lang="scss">

@use './styles/general';
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins' as *;

</style>