<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  data(){
    return{

    }
  },
  
  components:{
    AppHeader,
    AppMain,
  }

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