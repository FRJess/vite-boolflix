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
      store.isLoadMovie = false;
      store.isLoadTV = false;
      axios.get(store.apiUrl + type, { params: store.apiParams })
      .then( result => {
        store[type] = [];
        store[type] = result.data.results;
        console.log(result.data.results)
        store.isLoadMovie = true;
        store.isLoadTV = true;
      })
      .catch(error => {
        console.log(error)
      })
    },

    getApiTrend(){
      store.isLoadTrend = false;
      axios.get(store.apiTrendingUrl)
      .then(result =>{
        store.trending = result.data.results;
        console.log(result.data.results)
        store.isLoadTrend = true
      })
      .catch(error => {
        console.log(error)
      })
    },

    getPopular(){
      this.getApiTrend;
    },

    startSearch(){
      store.isLoadMovie = false;
      store.isLoadTV = false;
      store.movie = [];
      store.tv = [];
      if(store.type === ''){
        this.getApi('movie');
        this.getApi('tv');
        store.isLoadMovie = true;
        store.isLoadTV = true;
      }else{
        this.getApi(store.type)
      }
      store.apiParams.query = '';
      store.type = '';
    }
  },

  mounted(){
    this.startSearch();
    this.getApiTrend()
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