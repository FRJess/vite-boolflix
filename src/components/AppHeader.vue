<script>
import AppSearch from './AppSearch.vue';

export default {
  name: 'AppHeader',

  components:{
    AppSearch,
  }

}
</script>

<template>
  <div class="jt-container p-5">
    <img src="../assets/img/logo.png" alt="logo Jessflix">
    <AppSearch @startSearch ="$emit('search')"/>
  </div>

  
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.jt-container{
  width: 100%;
  // min-width: 100%;

  @include positionFlex('between');
  @include centerFlex('vertical');

  img{
    filter: saturate(200%);
    -webkit-filter: saturate(200%);
      
  }
}

</style>