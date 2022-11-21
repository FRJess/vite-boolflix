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
    getResults(){
      axios.get(store.apiUrl)
      .then( result => {
        console.log(result.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted(){
    this.getResults()
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